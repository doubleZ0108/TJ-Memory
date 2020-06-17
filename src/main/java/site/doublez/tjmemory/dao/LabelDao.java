package site.doublez.tjmemory.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tjmemory.entity.DayInfo;
import site.doublez.tjmemory.entity.HistoryPic;
import site.doublez.tjmemory.entity.Label;

import java.util.ArrayList;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/17
 **/
@Mapper
public interface LabelDao {
    void insert_label(Label label);

    ArrayList<Label> select_label(DayInfo dayInfo);
}