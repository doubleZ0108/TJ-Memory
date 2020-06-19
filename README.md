# 济·忆 | TJ-Memory

🌐 [济·忆 | TJ-Memory](http://tj-memory.doublez.site/)

🎥 [网页视频 | Intro Video](https://b23.tv/gMvhLr)

 📦[tj-memory-0.0.1-SNAPSHOT](https://github.com/doubleZ0108/TJ-Memory/releases/tag/v1.0)

#### Table of Contents

   * [济·忆 | TJ-Memory](#济忆--tj-memory)
      * [背景介绍](#背景介绍)
      * [功能介绍](#功能介绍)
      * [测试用例](#测试用例)
      * [主要界面](#主要界面)
         * [主界面](#主界面)
         * [同济日历](#同济日历)
         * [同济印记](#同济印记)
         * [注册 / 登陆](#注册--登陆)
         * [全景漫游](#全景漫游)
         * [loading](#loading)
         * [404 Not Found](#404-not-found)
         * [分享](#分享)
      * [开发环境](#开发环境)
      * [核心实现](#核心实现)
         * [前端](#前端)
            * [Contentful](#contentful)
            * [日历](#日历)
            * [上传图片](#上传图片)
            * [全景漫游](#全景漫游-1)
         * [后端](#后端)
            * [Controller](#controller)
            * [Dao](#dao)
            * [Entity](#entity)
            * [Service](#service)
         * [全景拼接](#全景拼接)
         * [图片处理](#图片处理)
            * [图片编码](#图片编码)
            * [图片解码](#图片解码)
            * [图片压缩](#图片压缩)
         * [数据库](#数据库)
            * [创建用户表](#创建用户表)
            * [照片相关sql](#照片相关sql)
      * [关于作者](#关于作者)
      * [项目结构](#项目结构)

------

## 背景介绍

疫情突然而至，打破了原本的学校生活，也打破了我们记录生活的方式

从blog到vlog，人们记录生活的方式在不断丰富

济·忆 —— 尝试从全新视角发现身边的美

📸 用全景记录生活

<br/>

## 功能介绍

- [x] 同济日历
  - [x] 查看某年某月日历信息
  - [x] 单击鼠标切换日期
  - [x] 双击日期上传图片并添加回忆
- [x] 全景拼接：可以上传1～3张照片，后台会进行全景拼接（全景拼接算法需要满足图片本身位于同一平面等，可能不能完美拼接）
- [x] 同济印记：以百叶窗的形式展示所有回忆
- [x] 全景漫游
  - [x] 拖动鼠标进行场景漫游
  - [x] 双击添加回忆
  - [x] 单击鼠标右键切换文字标签和图标标签
  - [x] 鼠标滚轮进行场景缩放
  - [x] 适配手机端触摸事件
- [x] 界面导航
  - [x] 其中完善了「同济商城」并作为子系统
- [x] 注册 / 登陆
- [x] 媒体信息（github，邮箱，视频，文档）
- [x] 分享
  - [x] qq
  - [x] 微信（需要用浏览器扫码）
  - [x] qq空间
  - [x] 微博
- [x] 特效
  - [x] svg波浪特效
  - [x] 动态加载流体特效
- [x] CMS动态修改网站内容（不需要再次部署）
- [x] 数据持久化
- [x] 远程部署：tj-memory.doublez.site
- [x] 适配PC 平板 手机等不同平台

<br/>

## 测试用例

(由于服务器比较慢，请耐性等待...)

| Item   | Value  |
| ------ | ------ |
| 用户名 | tongji |
| 密码   | tongji |

<br/>

## 主要界面

### 主界面

<img src="https://upload-images.jianshu.io/upload_images/12014150-1e2095143c81a911.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618085228615" width="67%;" />

### 同济日历

<img src="https://upload-images.jianshu.io/upload_images/12014150-8671c8af8cd2ffe9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618085303035" width="67%;" />

### 同济印记

<img src="https://upload-images.jianshu.io/upload_images/12014150-1134d72b9af03bec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618085345999" width="67%;" />

### 注册 / 登陆

<img src="https://upload-images.jianshu.io/upload_images/12014150-e61b031b5fa2a360.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618085048717" width=" 67%;" />

### 全景漫游

<img src="https://upload-images.jianshu.io/upload_images/12014150-cbf7e6589203331f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618085506054" width="67%;" />

<img src="https://upload-images.jianshu.io/upload_images/12014150-752f1d064b869cc0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618085632781" width="67%;" />

<img src="https://upload-images.jianshu.io/upload_images/12014150-b0b19cf1b1d92696.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618085648694" width="67%;" />

### loading

<img src="https://upload-images.jianshu.io/upload_images/12014150-aa8952c44df9918d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618085125606" width=" 67%;" />

### 404 Not Found

<img src="https://upload-images.jianshu.io/upload_images/12014150-d9e74eacf87582a5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618085403934" width="67%;" />

### 分享

<img src="https://upload-images.jianshu.io/upload_images/12014150-24ce5b1f3173a12c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" alt="image-20200618090119324" width="50%;" />

<br/>

## 开发环境

- **操作系统**

  - **开发环境**：macOS Catalina 10.15.4
  - **部署环境**：Ubuntu 16.04.6 LTS

- **IDE**

  - Visual Studio Code 1.45.1
  - IntelliJ IDEA 2019.3.2
  - PyCharm 2019.3.2

- **开发语言**

  - HTML5
  - CSS3
  - JavaScript
  - Java
  - python

- **数据库 **: mysql 8.0.20

- **框架技术**

  - 前端：

    - 原生HTML + CSS + JavaScript
    - three.js

    > ​	仅有一处使用Vue框架，主要为了全方面学习

  - 后端：SpringBoot + Maven + Mysql + MyBatis

- **主要依赖**: opencv-python

  > 其中涉及到版本问题，环境需要进行如下配置
  >
  > ```shell
  > pip uninstall opencv-python
  > pip install opencv-python==3.4.2.16 -i "https://pypi.doubanio.com/simple/"
  > pip install opencv-contrib-python==3.4.2.16 -i "https://pypi.doubanio.com/simple/"
  > ```
  >
  > 

- **CMS**: Contentful

  > 部分图片资源来自网络，侵删

<br/>

## 核心实现

（这里仅展示部分逻辑和实现等）

### 前端

#### Contentful

```js
function getEntries_by_ContentType(client, content_type){
     return new Promise(resolve => {
         client.getEntries({
             content_type: content_type
           })
             .then((response) => {
                 resolve(response);
             })
             .catch(console.error);
     });
 }

let response = await getEntries_by_ContentType(client, 'tjMemoryHero');
let heroObj = response.items[0].fields;
this.styleObject.backgroundImage = "url(" + "https:" + heroObj.bg.fields.file.url + ")";
```

#### 日历

日历核心部分全部由JavaScript进行动态生成

```html
<div id="CalendarGroup" class="CalendarGroup">
  <div class="awesome-calendar">
    <div class="header" style="grid-area: header;">
      <div class="left-part">
        <div id="year-left" class="nev">&lt;&lt;</div>
        <div id="month-left" class="nev">&lt;</div>
      </div>
      <h1 id="current-year-month">November<br />2017</h1>
      <div class="right-part">
        <div id="month-right" class="nev">&gt;</div>
        <div id="year-right" class="nev">&gt;&gt;</div>
      </div>
    </div>
    <div id="weeks" class="weeks" style="grid-area: weeks;">
      <!-- <div class="week" style="grid-area: Monday;">Monday</div> -->
    </div>
    <div id="days" class="days" style="grid-area: days;">
    </div>
  </div>
</div>
```

```js
function printDays(year, month) {
  refresh();

  isExistArray = [];

  var nowMonthStartDay = new Date(year, month - 1, 1).getDay();   //当前月第一天是周几
  if(nowMonthStartDay == 0) {
    nowMonthStartDay = 7;
  }
  var numberOfDaysInMonth = new Date(year, month, 0).getDate();   //当前月有多少天
  now.innerHTML = " ";
  now.innerHTML = monthLetter[month - 1] + '<br />' + year;        //改变title的内容

  if(sessionStorage.getItem("isLogin") === "true"){
    startLoader();	// 启动流体loader
    let calendarInfo = {
      "username": sessionStorage.getItem("username"),
      "picyear": changeYear,
      "picmonth": changeMonth + 1,
    };
    connectToBackEnd(calendarInfo, "calendar")
      .then(result => {
      stopLoad();	// 停止流体loader
      obj = [];
      if(result['state'] === 'true'){
        obj = result["photos"];
        
        initHistory(result["photos"]);

        for(var i = 1, j = nowMonthStartDay; i <= numberOfDaysInMonth; i++, j++) {  //判断变色的日期
          var DayText = $("day" + j);
          var DayBgColor = DayText;
          if(isAwesome){
            DayText = $("day-text-" + j);
            DayBgColor = $("day-bgcolor-" + j);
          }

          let existItem = isExist(obj, changeYear, changeMonth+1, j);
          if(existItem != false){
            isExistArray.push(j.toString());
            $("day-description-" + j).innerHTML = existItem.description;

            setStyle(DayBgColor, {
              background: "url(" + existItem.imgbase.replace(/[\r\n]/g,"") + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
            });
          }

          DayText.innerHTML = "" + i;
          if(year == thisYear && month == thisMonth && i.toString() == dayNum) {   //当前日期一直是红色
            setStyle(DayBgColor, {
              background: '#E96D71'
            });
          }
          if(i.toString() == changeDay) {     //选中的符合要求的日期显示绿色
            DayBgColor.style = "background:#1abc9c";
            let freshDay = new Date(changeYear, changeMonth-1, changeDay);
            let weekNum = (freshDay.getDay() + 7 - 1) % 7;

            if(weekNum === 6) {
              $("week-bg").style.left = "calc(calc(calc(var(--button-width) + var(--week-padding))*" + weekNum + ") - calc(var(--week-padding)*0.5))";
            } else {
              $("week-bg").style.left = "calc(calc(var(--button-width) + var(--week-padding))*" + weekNum + ")";
            }
          }
        }
      } else {
        alert(result['msg'] + "加载同济日历，请刷新尝试");
      }
    })
      .catch(error => console.log(error));
  }
```

#### 上传图片

```js
myinput.onchange = function (){
  // TODO 用户选择好文件点击确定
  let imageType = /^image\//;

  if(this.files.length){
    var _description = prompt("请输入你的回忆描述");
    if(_description==null || _description==""){
      alert("输入的回忆不能为空");
      return;
    }
    event.target.parentElement.nextElementSibling.firstElementChild.innerHTML = _description;
    isExistArray.push(now.day.toString());

    /******* 多张图片处理逻辑 *********/
    let fileappidx = null;
    let total = this.files.length;
    counter = 0;

    for(var i=0; i<this.files.length; ++i){
      let file = this.files[i];
      fileappidx = file.type.substring(file.type.indexOf("/")+1);
      let reader = new FileReader();
      if (!imageType.test(file.type)) {
        alert("请选择图片, 该类型的文件不受支持!");
        return;
      }

      let imgbase64 = reader.result;

      //新建 FileReader 对象
      reader.onload = function(){
        counter ++;
        let _imgname = getIndexStr(now.year) + "-" +
            getIndexStr(now.month) + "-" +
            getIndexStr(now.day) + "." + fileappidx;

        let data_from_front = {
          username: sessionStorage.getItem("username"),
          picyear: now.year,
          picmonth: now.month,
          picday: now.day,
          description: _description,
          imgbase: this.result,
          imgurl: sessionStorage.getItem("username") + "/" + _imgname,
          index: counter,
          length: total,
        };

        let itemBg = event.target.previousElementSibling.firstElementChild;
        setStyle(itemBg, {
          background: "url(" + this.result + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        });

        connectToBackEnd(data_from_front, "add_picture")
          .then(result => {
          if(result['state'] === 'true'){
            obj.push({
              description: data_from_front.description,
              picyear: data_from_front.picyear,
              picmonth: data_from_front.picmonth,
              picday: parseInt(data_from_front.picday),
              username: data_from_front.username,
              imgbase: this.result,
              picurl: data_from_front.imgurl
            });
          } else {
            alert(result['msg'] + "添加图片失败，请刷新尝试");
          }
        })
          .catch(error => console.log(error));
      };
      reader.readAsDataURL(file); //以base64方式读取文件
    }
    /******* END 多张图片处理逻辑 *********/
  }
};
```



#### 全景漫游

(这里体量比较庞大，可以参看tpanorama.js)

```js
opt = {
  container: 'panoramaConianer',//容器
  url: '../db/' + imgurl ,
  lables: _lables,
  widthSegments: 60,      //水平切段数
  heightSegments: 40,     //垂直切段数（值小粗糙速度快，值大精细速度慢）
  pRadius: 1000,          //全景球的半径，推荐使用默认值
  minFocalLength: 6,      //镜头最小拉近距离
  maxFocalLength: 100,    //镜头最大拉近距离
  sprite: 'label',         // label,icon
  onClick: (e) => {
    console.log(e.object.name);
  }
};
tp = new tpanorama(opt);
```

```js
tpanorama.prototype = {
  constructor: this,
  def: {},
  render: function (opt) {
    this.def = extend(options, opt, true);
    document.getElementById(this.def.container).innerHTML = '';
    _lables = [];
    initContainer(this.def.container);
    initCamera();
    initRaycaster();
    makePanorama(this.def.pRadius, this.def.widthSegments, this.def.heightSegments, this.def.url);
    initRenderer();
    initLable(this.def.lables, this.def.sprite);

    _container.addEventListener('dblclick', mydblClickHandler, false);
    _container.addEventListener('touchstart', mydblTouchHandler, false);
    _container.addEventListener('mousedown', onRightClickHandler, false);
    document.oncontextmenu = function(e){
      e.preventDefault();
      return false;
    };
    _container.addEventListener('mousedown', onDocumentMouseDown, false);
    _container.addEventListener('mousemove', onDocumentMouseMove, false);
    _container.addEventListener('mouseup', onDocumentMouseUp, false);
    _container.addEventListener('touchstart', onDocumentTouchStart, false);
    _container.addEventListener('touchmove', onDocumentTouchMove, false);
    _container.addEventListener('touchend', onDocumentTouchEnd, false);

    _container.addEventListener('mousewheel', (e) => {
      onDocumentMouseWheel(e, this.def.minFocalLength, this.def.maxFocalLength);
    }, false);
    _container.addEventListener('DOMMouseScroll', (e) => {
      onDocumentMouseWheel(e, this.def.minFocalLength, this.def.maxFocalLength);
    }, false);
    _container.addEventListener('click', onDocumentMouseClick.bind(this), false);
    global.addEventListener('resize', onWindowResize, false);

    animate();
  }
};
```

<br/>

### 后端

#### Controller

```java
@Controller
@ComponentScan({"site.doublez.tjmemory.service"})
@MapperScan("site.doublez.tjmemory.dao")
public class CalendarController {

    @Resource
    private PythonConnectorService pythonConnectorService;

    @Resource
    private PhotoService photoService;

    @PostMapping("/calendar")
    @ResponseBody
    public Map<String, Object> History(@RequestBody Map<String,Object> map) throws ParseException {
        String username = map.get("username").toString();
        int picyear = Integer.parseInt(map.get("picyear").toString());
        int picmonth = Integer.parseInt(map.get("picmonth").toString());
        Map<String, Object> result_map = new HashMap<>();
        try {
            ArrayList<Photo> photoArrayList = photoService.select_photos_by_year_month(new DayInfo(username, picyear, picmonth));
            result_map.put("photos", photoArrayList);
            result_map.put("state", "true");
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }
}
```



#### Dao

```java
@Mapper
public interface PhotoDao {
    void insert_photo(Photo photo);

    ArrayList<Photo> select_photos_by_year_month(DayInfo dayInfo);

    Photo select_photo_by_date(DayInfo dayInfo);
}
```



#### Entity

```java
@Data
public class Photo {
    private int id;
    private String username;
    private int picyear;
    private int picmonth;
    private int picday;
    private String imgbase;
    private String description;
    private String picurl;
}
```



#### Service

```java
@Service("labelService")
@ComponentScan({"site.doublez.tjmemory.dao"})
public class LabelService {
    @Resource
    private LabelDao labelDao;

    public void insert_label(Label label){
        labelDao.insert_label(label);
    }

    public ArrayList<Label> select_label(String username, int picyear, int picmonth, int picday){
        return labelDao.select_label(new DayInfo(username, picyear, picmonth, picday));
    }
}
```

<br/>

### 全景拼接

```python
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
```

<br/>

### 图片处理

#### 图片编码

```java
public String encode_img_to_base64(String imgurl){
  String basepath = "src/main/resources/static/db/";
  byte[] data = null;
  try{
    InputStream in = new FileInputStream(basepath + imgurl);
    data = new byte[in.available()];
    in.read(data);
    in.close();
  } catch (IOException e){
    e.printStackTrace();
  }

  BASE64Encoder encoder = new BASE64Encoder();
  return encoder.encode(data);
}
```

#### 图片解码

```java
public void saveImg(String baseImg, String imgurl){
  //正则表达式的筛选规则，为了获取图片的类型
  String rgex = "data:image/(.*?);base64";
  String type = getSubUtilSimple(baseImg, rgex);
  //去除base64图片的前缀
  baseImg = baseImg.replaceFirst("data:(.+?);base64,", "");
  byte[] b;
  byte[] bs;
  OutputStream os = null;

  //把图片转换成二进制
  b = Base64.decode(baseImg.replaceAll(" ", "+"));

  File imageFile = new File(imgurl);
  BASE64Decoder d = new BASE64Decoder();
  // 保存
  try {
    bs = d.decodeBuffer(Base64.encode(b));
    os = new FileOutputStream(imageFile);
    os.write(bs);
  } catch (IOException e) {
    e.printStackTrace();

  }finally {
    if (os != null) {
      try {
        os.close();
      } catch (IOException e) {
        e.getLocalizedMessage();
      }
    }
  }
}
```



#### 图片压缩

```java
Thumbnails.of(basepath + imgurl).scale(0.2).toFile(basepath + newimgurl);
```

<br/>

### 数据库

使用MediumText字段进行存储

#### 创建用户表

```sql
CREATE TABLE `TJ-Memory`.`User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
```



#### 照片相关sql

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="site.doublez.tjmemory.dao.PhotoDao">

    <insert id = "insert_photo" parameterType="site.doublez.tjmemory.entity.Photo">
        INSERT INTO
            Photo(ID,USERNAME,PICYEAR,PICMONTH,PICDAY,IMGBASE,DESCRIPTION,PICURL)
        VALUES
            (#{id},#{username},#{picyear},#{picmonth},#{picday},#{imgbase},#{description},#{picurl});
    </insert>

    <select id="select_photos_by_year_month" parameterType="site.doublez.tjmemory.entity.DayInfo" resultType="site.doublez.tjmemory.entity.Photo">
        SELECT *
        FROM Photo
        WHERE (USERNAME=#{username} AND PICYEAR=#{picyear} AND PICMONTH=#{picmonth});
    </select>

    <select id="select_photo_by_date" parameterType="site.doublez.tjmemory.entity.DayInfo" resultType="site.doublez.tjmemory.entity.Photo">
        SELECT *
        FROM Photo
        WHERE (USERNAME=#{username} AND PICYEAR=#{picyear} AND PICMONTH=#{picmonth} AND PICDAY=#{picday});
    </select>
</mapper>
```



<br/>

## 关于作者

| Item            | Info                                                |
| --------------- | --------------------------------------------------- |
| **Name**        | 张喆                                                |
| **ID**          | 1754060                                             |
| **Adviser**     | 金伟祖老师                                          |
| **Course Name** | Web系统与技术                                       |
| **Course Time** | 星期二 3-4 [1-17]  星期四 3-4 双[2-16]              |
| **Email**       | [dbzdbz@tongji.edu.cn](mailto:dbzdbz.tongji.edu.cn) |

<br/>

## 项目结构

- 后端

  ```
  .
  ├── HELP.md
  ├── README.md
  ├── TJ-Memory.iml
  ├── mvnw
  ├── mvnw.cmd
  ├── pom.xml
  └── src
      ├── main
      │   ├── java
      │   │   └── site
      │   │       └── doublez
      │   │           └── tjmemory
      │   │               ├── TjMemoryApplication.java
      │   │               ├── controller
      │   │               │   ├── CalendarController.java
      │   │               │   ├── HistoryController.java
      │   │               │   ├── IndexController.java
      │   │               │   ├── LoginController.java
      │   │               │   ├── MyErrorController.java
      │   │               │   └── PanoramaController.java
      │   │               ├── dao
      │   │               │   ├── LabelDao.java
      │   │               │   ├── PhotoDao.java
      │   │               │   └── UserDao.java
      │   │               ├── entity
      │   │               │   ├── CalendarInfo.java
      │   │               │   ├── CrossConfig.java
      │   │               │   ├── DayInfo.java
      │   │               │   ├── Label.java
      │   │               │   ├── Photo.java
      │   │               │   └── User.java
      │   │               └── service
      │   │                   ├── LabelService.java
      │   │                   ├── PhotoService.java
      │   │                   ├── PythonConnectorService.java
      │   │                   └── UserService.java
      │   └── resources
      │       ├── application.yml
      │       ├── mapper
      │       │   ├── LabelMapper.xml
      │       │   ├── PhotoMapper.xml
      │       │   └── UserMapper.xml
      │       ├── static
      │       └── templates
      └── test
          └── java
              └── site
                  └── doublez
                      └── tjmemory
                          └── TjMemoryApplicationTests.java
  ```

- 前端

  ```
  .
  ├── static
  │   ├── css
  │   │   ├── calendar.css
  │   │   ├── error.css
  │   │   ├── footer.css
  │   │   ├── global.css
  │   │   ├── hero.css
  │   │   ├── history.css
  │   │   ├── loader.css
  │   │   ├── login.css
  │   │   ├── myshare.css
  │   │   ├── navigator.css
  │   │   ├── panorama.css
  │   │   ├── sectioncaption.css
  │   │   ├── socialmedia.css
  │   │   └── wavesection.css
  │   ├── db
  │   ├── fonts
  │   │   ├── iconfont.eot
  │   │   ├── iconfont.svg
  │   │   ├── iconfont.ttf
  │   │   └── iconfont.woff
  │   ├── img
  │   │   └── favicon.ico
  │   ├── js
  │   │   ├── awesome-calendar.js
  │   │   ├── calendar.js
  │   │   ├── contentful.api.js
  │   │   ├── error.js
  │   │   ├── hero.js
  │   │   ├── history.js
  │   │   ├── index.js
  │   │   ├── loader.js
  │   │   ├── login.js
  │   │   ├── myshare.js
  │   │   ├── navigator.js
  │   │   ├── panorama.js
  │   │   ├── socialmedia.js
  │   │   ├── util.js
  │   │   ├── waterripple.js
  │   │   └── wavesection.js
  │   ├── json
  │   │   ├── navigator.json
  │   │   ├── socialmedia.json
  │   │   ├── testcalendar.json
  │   │   └── tongji.json
  │   ├── lib
  │   │   ├── share.min.css
  │   │   ├── social-share.min.js
  │   │   ├── three.js
  │   │   ├── tpanorama.js
  │   │   └── vue.min.js
  │   └── python
  │       ├── panorama.py
  │       └── test.py
  └── templates
      ├── calendar.html
      ├── error.html
      ├── index.html
      ├── login.html
      └── panorama.html
  ```

  

