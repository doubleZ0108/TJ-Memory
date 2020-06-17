package site.doublez.tjmemory.entity;

import lombok.Data;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/17
 **/
@Data
public class DayInfo {
    private String username;
    private int picyear;
    private int picmonth;
    private int picday;

    public DayInfo() {
    }

    public DayInfo(String username, int picyear, int picmonth, int picday) {
        this.username = username;
        this.picyear = picyear;
        this.picmonth = picmonth;
        this.picday = picday;
    }

    public DayInfo(String username, int picyear, int picmonth) {
        this.username = username;
        this.picyear = picyear;
        this.picmonth = picmonth;
    }
}
