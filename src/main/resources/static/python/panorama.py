'''
@program: FullView.py

@description: 有关全景拼接的函数

@author: doubleZ

@create: 2019/11/23
'''
# coding=utf-8
from cv2 import cv2
import numpy as np
from sys import argv
import os

'''
设置拼接后的全景图名字
'''
def get_full_view_result_name(filename1, filename2):
    filename1_arr = filename1.split('.')
    filename2_arr = filename2.split('.')
    return filename1_arr[0] + '_' + filename2_arr[0] + '.' + filename1_arr[1]


'''
制作两张图像的全景图
'''
def full_view(filename1, filename2, dirname):
    leftgray, rightgray = cv2.imread(dirname + filename1), cv2.imread(dirname + filename2)

    hessian = 400
    surf = cv2.xfeatures2d.SURF_create(hessian)  # 将Hessian Threshold设置为400,阈值越大能检测的特征就越少
    kp1, des1 = surf.detectAndCompute(leftgray, None)  # 查找关键点和描述符
    kp2, des2 = surf.detectAndCompute(rightgray, None)

    FLANN_INDEX_KDTREE = 0  # 建立FLANN匹配器的参数
    indexParams = dict(algorithm=FLANN_INDEX_KDTREE, trees=5)  # 配置索引，密度树的数量为5
    searchParams = dict(checks=50)  # 指定递归次数
    # FlannBasedMatcher：是目前最快的特征匹配算法（最近邻搜索）
    flann = cv2.FlannBasedMatcher(indexParams, searchParams)  # 建立匹配器
    matches = flann.knnMatch(des1, des2, k=2)  # 得出匹配的关键点

    good = []
    # 提取优秀的特征点
    for m, n in matches:
        # if m.distance < 0.7 * n.distance:  # 如果第一个邻近距离比第二个邻近距离的0.7倍小，则保留
        if m.distance < 0.3 * n.distance:
            good.append(m)
    src_pts = np.array([kp1[m.queryIdx].pt for m in good])  # 查询图像的特征描述子索引
    dst_pts = np.array([kp2[m.trainIdx].pt for m in good])  # 训练(模板)图像的特征描述子索引
    H = cv2.findHomography(src_pts, dst_pts)  # 生成变换矩阵

    h, w = leftgray.shape[:2]
    h1, w1 = rightgray.shape[:2]
    shft = np.array([[1.0, 0, w], [0, 1.0, 0], [0, 0, 1.0]])
    M = np.dot(shft, H[0])  # 获取左边图像到右边图像的投影映射关系

    dst_corners = cv2.warpPerspective(leftgray, M, (w * 2, h))  # 透视变换，新图像可容纳完整的两幅图
    # cv2.imshow('before add right', dst_corners)
    # dst_corners[0:h, 0:w] = leftgray
    dst_corners[0:h, w:w + w1] = rightgray  # 将第二幅图放在右侧

    # 删除空白列
    sum_col = np.sum(np.sum(dst_corners, axis=0), axis=1)

    result_img = np.zeros(shape=(dst_corners.shape[0], 1, 3))

    for i in range(len(sum_col)):
        if sum_col[i] != 0:
            result_img = np.hstack([result_img, dst_corners[:, i:i + 1, :]])

    result_img = result_img[:, 1:]

    # cv2.imshow('dest', dst_corners)
    result_name = get_full_view_result_name(filename1, filename2)

    cv2.imwrite(dirname + result_name, result_img)

    cv2.waitKey()
    cv2.destroyAllWindows()

    return result_name


'''
循环拼接目录中的文件，最终返回文件名
'''
def get_full_view_image(filenames, dirname):
    n = len(filenames)

    if n == 0:
        return filenames[0]
    else:
        result_name = full_view(filenames[0], filenames[1], dirname)
        for i in range(n - 2):
            result_name = full_view(result_name, filenames[i + 2], dirname)

    print("get fulll view image")
    return result_name


if __name__ == '__main__':
    print("connecting to python OK...")

    imgurl = argv[1]
    total = argv[2]

    print(imgurl, total)

    path = imgurl[:imgurl.index("/")+1]
    filename = imgurl[imgurl.index("/")+1:imgurl.index(".")]
    appidx = imgurl[imgurl.index("."):]

    dirname = '/Users/doublez/Developer/Digital Media/TJ-Memory/src/main/resources/static/db/' + path
    filenames = []
    for i in range(1,int(total)+1):
        filenames.append(filename + "-" + str(i) + appidx)

    result_name = get_full_view_image(filenames, dirname)

    # 清理中间文件
    for i in range(1, int(total)+1):
        os.remove(dirname + filenames[i-1])

    os.rename(dirname+result_name, dirname+filename+appidx)

    # for title in os.listdir(dirname):
    #     if title.find("_") != -1:
    #         os.remove(dirname + title)


    print("finish panorama stitching...")
