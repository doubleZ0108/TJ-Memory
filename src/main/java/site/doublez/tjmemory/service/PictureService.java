package site.doublez.tjmemory.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tjmemory.dao.HistoryPicDao;
import site.doublez.tjmemory.dao.PictureDao;
import site.doublez.tjmemory.entity.CalendarInfo;
import site.doublez.tjmemory.entity.Picture;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Service("pictureService")
@ComponentScan({"site.doublez.tjmemory.dao"})
public class PictureService {
    @Resource
    private PictureDao pictureDao;

    public ArrayList<Picture> select_pictures(String username, int picyear, int picmonth){
        return pictureDao.select_pictures(new CalendarInfo(username, picyear, picmonth));
    }
}
