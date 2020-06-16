package site.doublez.tjmemory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import site.doublez.tjmemory.service.UserService;

import javax.annotation.Resource;
import java.io.*;
import java.util.HashMap;
import java.util.Map;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/15
 **/
@Controller
public class IndexController {
    @Resource
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET)
    public String root() throws IOException, InterruptedException {
        return "index";
    }

    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String index(){
        return "index";
    }
}
