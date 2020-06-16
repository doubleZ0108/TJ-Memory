package site.doublez.tjmemory.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import site.doublez.tjmemory.entity.HistoryPic;
import site.doublez.tjmemory.entity.Picture;
import site.doublez.tjmemory.service.PictureService;

import javax.annotation.Resource;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Controller
@ComponentScan({"site.doublez.tjmemory.service"})
@MapperScan("site.doublez.tjmemory.dao")
public class CalendarController {
    @Resource
    private PictureService pictureService;

    @PostMapping("/calendar")
    @ResponseBody
    public Map<String, Object> History(@RequestBody Map<String,Object> map) throws ParseException {
        String username = map.get("username").toString();
        String picyear = map.get("picyear").toString();
        String picmonth = map.get("picmonth").toString();

        Map<String, Object> result_map = new HashMap<>();

        try {
            ArrayList<Picture> pictureArrayList = pictureService.select_pictures(username, Integer.parseInt(picyear), Integer.parseInt(picmonth));

            result_map.put("pictures", pictureArrayList);
            result_map.put("state", "true");
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }
}