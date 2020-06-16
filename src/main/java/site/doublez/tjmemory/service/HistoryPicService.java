package site.doublez.tjmemory.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tjmemory.dao.HistoryPicDao;
import site.doublez.tjmemory.entity.HistoryPic;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Service("historypicService")
@ComponentScan({"site.doublez.tjmemory.dao"})
public class HistoryPicService {
    @Resource
    private HistoryPicDao historyPicDao;

    public void insert_picture(HistoryPic historyPic){
        historyPicDao.insert_picture(historyPic);
    }

    public ArrayList<HistoryPic> select_history(String username){
        return historyPicDao.select_history(username);
    }
}
