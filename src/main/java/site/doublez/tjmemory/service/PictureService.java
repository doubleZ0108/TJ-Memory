package site.doublez.tjmemory.service;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import com.sun.org.apache.xml.internal.security.exceptions.Base64DecodingException;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tjmemory.dao.PictureDao;
import site.doublez.tjmemory.entity.CalendarInfo;
import site.doublez.tjmemory.entity.Picture;
import sun.misc.BASE64Decoder;

import javax.annotation.Resource;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Service("pictureService")
@ComponentScan({"site.doublez.tjmemory.dao"})
public class PictureService {
    private static final int UUID = 0;

    @Resource
    private PictureDao pictureDao;

    public ArrayList<Picture> select_pictures(String username, int picyear, int picmonth){
        return pictureDao.select_pictures(new CalendarInfo(username, picyear, picmonth));
    }

    public void insert_picture(Picture picture){
        pictureDao.insert_picture(picture);
    }

    public void write_imgbase64_to_local(String imgbase, String imgurl){
        String basepath = "src/main/resources/static/db/";
        saveImg(imgbase, basepath + imgurl);
    }

    // 图片路劲层级分隔符
    private static String separator = "/";


    public void saveImg(String baseImg, String imgurl){
        //定义一个正则表达式的筛选规则，为了获取图片的类型
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


    public static String getSubUtilSimple(String soap,String rgex){
        Pattern pattern = Pattern.compile(rgex);
        Matcher m = pattern.matcher(soap);
        while(m.find()){
            return m.group(1);
        }
        return "";
    }
}
