package site.doublez.tjmemory.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import site.doublez.tjmemory.entity.HistoryPic;
import site.doublez.tjmemory.entity.Picture;
import site.doublez.tjmemory.service.HistoryPicService;
import site.doublez.tjmemory.service.PictureService;

import javax.annotation.Resource;
import java.net.Inet4Address;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
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

    @Resource
    private HistoryPicService historyPicService;


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

    @PostMapping("/add_picture")
    @ResponseBody
    public Map<String, Object> AddPicture(@RequestBody Map<String,Object> map) throws ParseException {
        String username = map.get("username").toString();
        String picyear = map.get("picyear").toString();
        String picmonth = map.get("picmonth").toString();
        String picday = map.get("picday").toString();
        String description = map.get("description").toString();
        String imgbase = map.get("imgbase").toString();
        String imgurl = map.get("imgurl").toString();


        Map<String, Object> result_map = new HashMap<>();

        try {
            pictureService.write_imgbase64_to_local(imgbase, imgurl);
            pictureService.insert_picture(new Picture(username, imgurl,
                    Integer.parseInt(picyear), Integer.parseInt(picmonth), Integer.parseInt(picday), description));
            historyPicService.insert_history(new HistoryPic(username,
                    new Date(Integer.parseInt(picyear)-1900, Integer.parseInt(picmonth)-1, Integer.parseInt(picday)),
                    description, imgurl));

            result_map.put("state", "true");
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }
}
