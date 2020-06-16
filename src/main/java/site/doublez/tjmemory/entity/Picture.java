package site.doublez.tjmemory.entity;

import lombok.Data;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Data
public class Picture {
    private int id;
    private String username;
    private String picurl;
    private int picyear;
    private int picmonth;
    private int picday;
    private String description;

    public Picture() {
    }

    public Picture(int id, String username, String picurl, int picyear, int picmonth, int picday, String description) {
        this.id = id;
        this.username = username;
        this.picurl = picurl;
        this.picyear = picyear;
        this.picmonth = picmonth;
        this.picday = picday;
        this.description = description;
    }

    public Picture(String username, String picurl, int picyear, int picmonth, int picday, String description) {
        this.username = username;
        this.picurl = picurl;
        this.picyear = picyear;
        this.picmonth = picmonth;
        this.picday = picday;
        this.description = description;
    }
}
