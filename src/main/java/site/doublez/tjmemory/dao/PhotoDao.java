package site.doublez.tjmemory.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tjmemory.entity.DayInfo;
import site.doublez.tjmemory.entity.Photo;

import java.util.ArrayList;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/17
 **/
@Mapper
public interface PhotoDao {
    void insert_photo(Photo photo);

    ArrayList<Photo> select_photos_by_year_month(DayInfo dayInfo);

    Photo select_photo_by_date(DayInfo dayInfo);
}
