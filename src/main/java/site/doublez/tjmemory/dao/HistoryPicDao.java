package site.doublez.tjmemory.dao;

import lombok.Data;
import org.apache.ibatis.annotations.Mapper;
import site.doublez.tjmemory.entity.HistoryPic;

import java.util.ArrayList;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Mapper
public interface HistoryPicDao {
    void insert_history(HistoryPic historyOrder);

    ArrayList<HistoryPic> select_history(String username);
}
