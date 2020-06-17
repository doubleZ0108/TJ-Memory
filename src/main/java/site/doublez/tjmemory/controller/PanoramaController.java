package site.doublez.tjmemory.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import site.doublez.tjmemory.entity.Label;
import site.doublez.tjmemory.service.LabelService;

import javax.annotation.Resource;
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
public class PanoramaController {
    @Resource
    private LabelService labelService;

    @RequestMapping(value = "panorama", method = RequestMethod.GET)
    public String panorama(){
        return "panorama";
    }


    @PostMapping("/label")
    @ResponseBody
    public Map<String, Object> Label(@RequestBody Map<String,Object> map) {
        String username = map.get("username").toString();
        String picyear = map.get("picyear").toString();
        String picmonth = map.get("picmonth").toString();
        String picday = map.get("picday").toString();

        Map<String, Object> result_map = new HashMap<>();

        try {
            ArrayList<Label> labelArrayList = labelService.select_label(username,
                    Integer.parseInt(picyear), Integer.parseInt(picmonth), Integer.parseInt(picday));

            result_map.put("labels", labelArrayList);
            result_map.put("state", "true");
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }

    @PostMapping("/add_label")
    @ResponseBody
    public Map<String, Object> AddLabel(@RequestBody Map<String,Object> map) {
        String username = map.get("username").toString();
        int picyear = Integer.parseInt(map.get("picyear").toString());
        int picmonth = Integer.parseInt(map.get("picmonth").toString());
        int picday = Integer.parseInt(map.get("picday").toString());
        float lat = Float.parseFloat(map.get("lat").toString());
        float lon = Float.parseFloat(map.get("lon").toString());
        String description = map.get("description").toString();

        Map<String, Object> result_map = new HashMap<>();

        try {
            labelService.insert_label(new Label(username,picyear,picmonth,picday,lat,lon,description));

            result_map.put("state", "true");
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }
}
