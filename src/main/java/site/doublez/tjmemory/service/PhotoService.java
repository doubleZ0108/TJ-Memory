package site.doublez.tjmemory.service;

import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tjmemory.dao.PhotoDao;
import site.doublez.tjmemory.entity.DayInfo;
import site.doublez.tjmemory.entity.Photo;
import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import javax.annotation.Resource;
import java.io.*;
import java.util.ArrayList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/17
 **/
@Service("photoService")
@ComponentScan({"site.doublez.tjmemory.dao"})
public class PhotoService {
    @Resource
    private PhotoDao photoDao;

    public void insert_photo(Photo photo){
        photoDao.insert_photo(photo);
    }

    public ArrayList<Photo> select_photos_by_year_month(DayInfo dayInfo){
        return photoDao.select_photos_by_year_month(dayInfo);
    }

    public Photo select_photo_by_date(DayInfo dayInfo){
        return photoDao.select_photo_by_date(dayInfo);
    }

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

    public void write_imgbase64_to_local(String imgbase, String imgurl){
        String basepath = "src/main/resources/static/db/";
        saveImg(imgbase, basepath + imgurl);
    }

    // 图片路劲层级分隔符
    private static String separator = "/";


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


    public static String getSubUtilSimple(String soap,String rgex){
        Pattern pattern = Pattern.compile(rgex);
        Matcher m = pattern.matcher(soap);
        while(m.find()){
            return m.group(1);
        }
        return "";
    }
}
