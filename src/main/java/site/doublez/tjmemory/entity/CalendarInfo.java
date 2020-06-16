package site.doublez.tjmemory.entity;

import lombok.Data;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Data
public class CalendarInfo {
    private String username;
    private int picyear;
    private int picmonth;

    public CalendarInfo() {
    }

    public CalendarInfo(String username, int picyear, int picmonth) {
        this.username = username;
        this.picyear = picyear;
        this.picmonth = picmonth;
    }
}
