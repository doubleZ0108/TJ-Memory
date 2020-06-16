package site.doublez.tjmemory.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import site.doublez.tjmemory.entity.User;
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
@ComponentScan({"site.doublez.tjmemory.service"})
@MapperScan("site.doublez.tjmemory.dao")
public class LoginController {

    @Resource
    private UserService userService;

    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String login(){
        return "login";
    }

    @RequestMapping(value = "login.html", method = RequestMethod.GET)
    public String loginpage(){
        return "login";
    }


    @PostMapping("/sign-up")
    @ResponseBody
    public Map<String, Object> SignUp(@RequestBody Map<String,Object> map){
        String username = map.get("username").toString();
        String password = map.get("password").toString();
        User user = new User(username, password);
        Map<String, Object> result_map = new HashMap<>();

        try{
            if(!userService.is_user_exist(username)){
                userService.create_user_db(username);

                userService.insert_user(user);
                result_map.put("state", "true");
            } else {
                result_map.put("state", "false");
                result_map.put("msg", "该用户已存在，请更换用户名注册 | 直接登陆");
            }
        } catch (Exception e){
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }

    @PostMapping("/sign-in")
    @ResponseBody
    public Map<String, Object> SignIn(@RequestBody Map<String,Object> map){
        String username = map.get("username").toString();
        String password = map.get("password").toString();
        User user = new User(username, password);

        Map<String, Object> result_map = new HashMap<>();

        try {
            if(userService.is_user_exist(username)){
                if(userService.check_username_password(user)){
                    result_map.put("state", "true");
                } else {
                    result_map.put("state", "false");
                    result_map.put("msg", "密码错误");
                }
            } else {
                result_map.put("state", "false");
                result_map.put("msg", "该用户不存在");
            }
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }
}