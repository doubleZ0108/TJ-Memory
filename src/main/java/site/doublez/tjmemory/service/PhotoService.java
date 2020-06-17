package site.doublez.tjmemory.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tjmemory.dao.PhotoDao;
import site.doublez.tjmemory.entity.DayInfo;
import site.doublez.tjmemory.entity.Photo;
import sun.misc.BASE64Encoder;

import javax.annotation.Resource;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;

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
}
