package site.doublez.tjmemory.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tjmemory.entity.CalendarInfo;
import site.doublez.tjmemory.entity.Picture;

import java.util.ArrayList;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Mapper
public interface PictureDao {
    ArrayList<Picture> select_pictures(CalendarInfo calendarInfo);
}
