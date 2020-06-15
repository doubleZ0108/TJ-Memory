package site.doublez.tjmemory.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tjmemory.dao.UserDao;
import site.doublez.tjmemory.entity.User;

import javax.annotation.Resource;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/15
 **/
@Service("userService")
@ComponentScan({"site.doublez.timemory.dao"})
public class UserService {
    @Resource
    private UserDao userDao;

    public User find_by_id(int id){
        return userDao.find_by_id(id);
    }
}
