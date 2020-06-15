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
        connect_to_python();
        return "index";
    }

    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String index(){
        return "index";
    }

    public void connect_to_python() {
        Process proc;
        try {
            proc = Runtime.getRuntime().exec("python src/main/resources/static/python/panorama.py");
            //用输入输出流来截取结果
            BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream()));
            String line = null;
            while ((line = in.readLine()) != null) {
                System.out.println(line);
            }
            in.close();
            proc.waitFor();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
//        System.out.println("Java finish calling python...");
    }
}
