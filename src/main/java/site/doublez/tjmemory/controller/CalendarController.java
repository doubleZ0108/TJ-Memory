package site.doublez.tjmemory.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import site.doublez.tjmemory.entity.DayInfo;
import site.doublez.tjmemory.entity.Photo;
import site.doublez.tjmemory.service.PhotoService;
import site.doublez.tjmemory.service.PythonConnectorService;

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
    private PythonConnectorService pythonConnectorService;

    @Resource
    private PhotoService photoService;

    @PostMapping("/calendar")
    @ResponseBody
    public Map<String, Object> History(@RequestBody Map<String,Object> map) throws ParseException {
        String username = map.get("username").toString();
        int picyear = Integer.parseInt(map.get("picyear").toString());
        int picmonth = Integer.parseInt(map.get("picmonth").toString());

        Map<String, Object> result_map = new HashMap<>();

        try {
//            ArrayList<Picture> pictureArrayList = pictureService.select_pictures(username, Integer.parseInt(picyear), Integer.parseInt(picmonth));

            ArrayList<Photo> photoArrayList = photoService.select_photos_by_year_month(new DayInfo(username, picyear, picmonth));

            System.out.println("finish chaxun");

            result_map.put("photos", photoArrayList);
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
        int picyear = Integer.parseInt(map.get("picyear").toString());
        int picmonth = Integer.parseInt(map.get("picmonth").toString());
        int picday = Integer.parseInt(map.get("picday").toString());
        String description = map.get("description").toString();
        String imgbase = map.get("imgbase").toString();
        String index = map.get("index").toString();
        int length = Integer.parseInt(map.get("length").toString());
        String imgurl = map.get("imgurl").toString();

        Map<String, Object> result_map = new HashMap<>();

        StringBuilder stringBuilder = new StringBuilder(imgurl);

        if(length > 1){
            stringBuilder.insert(stringBuilder.indexOf("."), "-" + index);
        }
        photoService.write_imgbase64_to_local(imgbase, stringBuilder.toString());

        if(Integer.parseInt(index) == length){    // 所有图片已经提交
            if(length > 1){
                pythonConnectorService.connect_to_python(imgurl, length);
            }

            try {
                int appidx_index = imgbase.indexOf("base64,");
                String front_appidx = imgbase.substring(0,appidx_index+7);

                String finalPhotobase = front_appidx + photoService.encode_img_to_base64(imgurl);

                photoService.insert_photo(new Photo(username, picyear, picmonth, picday, finalPhotobase, description, imgurl));

//                result_map.put("photobase", finalPhotobase);

                result_map.put("state", "true");
            } catch (Exception e){
                e.printStackTrace();
                result_map.put("state", "false");
                result_map.put("msg", "数据库错误");
            }
        } else {
            result_map.put("state", "true");
        }

        return result_map;
    }

}
