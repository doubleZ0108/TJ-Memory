package site.doublez.tjmemory.entity;

import lombok.Data;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/17
 **/
@Data
public class Photo {
    private int id;
    private String username;
    private int picyear;
    private int picmonth;
    private int picday;
    private String imgbase;
    private String description;
    private String picurl;

    public Photo() {
    }

    public Photo(int id, String username, int picyear, int picmonth, int picday, String imgbase, String description, String picurl) {
        this.id = id;
        this.username = username;
        this.picyear = picyear;
        this.picmonth = picmonth;
        this.picday = picday;
        this.imgbase = imgbase;
        this.description = description;
        this.picurl = picurl;
    }

    public Photo(String username, int picyear, int picmonth, int picday, String imgbase, String description, String picurl) {
        this.username = username;
        this.picyear = picyear;
        this.picmonth = picmonth;
        this.picday = picday;
        this.imgbase = imgbase;
        this.description = description;
        this.picurl = picurl;
    }
}
