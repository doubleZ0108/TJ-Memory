package site.doublez.tjmemory.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tjmemory.entity.User;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/15
 **/
@Mapper
public interface UserDao {
    User find_by_id(int id);
}
