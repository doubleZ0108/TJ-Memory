package site.doublez.tjmemory.entity;

import lombok.Data;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Data
public class HistoryPic {
    private int id;
    private String username;
    private Date pictime;
    private String description;
    private String imgurl;

    public HistoryPic(int id, String username, Timestamp pictime, String description, String imgurl) throws ParseException {
        this.id = id;
        this.username = username;

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date=new Date(pictime.getTime());
        this.pictime = simpleDateFormat.parse(simpleDateFormat.format(date));
        this.description = description;
        this.imgurl = imgurl;
    }

    public HistoryPic(String username, Date pictime, String description, String imgurl) {
        this.username = username;
        this.pictime = pictime;
        this.description = description;
        this.imgurl = imgurl;
    }
}
