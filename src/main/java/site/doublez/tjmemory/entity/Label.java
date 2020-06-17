package site.doublez.tjmemory.entity;

import lombok.Data;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/17
 **/
@Data
public class Label {
    private int id;
    private String username;
    private int picyear;
    private int picmonth;
    private int picday;
    private float lat;
    private float lon;
    private String description;

    public Label() {
    }

    public Label(String username, int picyear, int picmonth, int picday, float lat, float lon, String description) {
        this.username = username;
        this.picyear = picyear;
        this.picmonth = picmonth;
        this.picday = picday;
        this.lat = lat;
        this.lon = lon;
        this.description = description;
    }
}
