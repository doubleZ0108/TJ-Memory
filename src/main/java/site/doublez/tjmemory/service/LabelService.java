package site.doublez.tjmemory.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tjmemory.dao.LabelDao;
import site.doublez.tjmemory.entity.DayInfo;
import site.doublez.tjmemory.entity.Label;
import site.doublez.tjmemory.entity.Picture;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/17
 **/
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
