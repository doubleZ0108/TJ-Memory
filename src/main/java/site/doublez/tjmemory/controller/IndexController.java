package site.doublez.tjmemory.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import site.doublez.tjmemory.service.UserService;

import javax.annotation.Resource;
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
    public String root(){
        return "index";
    }

    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String index(){
        return "index";
    }

    @PostMapping("/find-by-id")
    @ResponseBody
    public Map<String, Object> SignUp(@RequestBody Map<String,Object> map){
        String username = map.get("username").toString();
        System.out.println(username);
        System.out.println(userService.find_by_id(1));

        Map<String, Object> result_map = new HashMap<>();
//
//        try{
//            if(!userService.is_user_exist(username)){
//                userService.insert_user(user);
//                result_map.put("state", "true");
//            } else {
//                result_map.put("state", "false");
//                result_map.put("msg", "该用户已存在，请更换用户名注册 | 直接登陆");
//            }
//        } catch (Exception e){
//            result_map.put("state", "false");
//            result_map.put("msg", "数据库错误");
//        }

        return result_map;
    }
}
