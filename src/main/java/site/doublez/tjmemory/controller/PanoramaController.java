package site.doublez.tjmemory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Controller
public class PanoramaController {
    @RequestMapping(value = "panorama", method = RequestMethod.GET)
    public String panorama(){
        return "panorama";
    }
}
