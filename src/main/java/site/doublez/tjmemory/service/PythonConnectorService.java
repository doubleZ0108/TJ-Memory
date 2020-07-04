package site.doublez.tjmemory.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * @program: TJ-Memory
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/06/16
 **/
@Service("pythonconnectorService")
@ComponentScan({"site.doublez.tjmemory.dao"})
public class PythonConnectorService {
    public void connect_to_python(String imgurl, int length) {
        Process proc;
        try {
            String python_file_path = "src/main/resources/static/python/panorama.py";
//            String python_file_path = "/root/Developer/Python/panorama.py";

            String[] cmdArr = new String[] {"python", python_file_path, imgurl, String.valueOf(length)};

            proc = Runtime.getRuntime().exec(cmdArr);
            //用输入输出流来截取结果
            BufferedReader in = new BufferedReader(new InputStreamReader(proc.getInputStream()));
            String line = null;
            while ((line = in.readLine()) != null) {
                System.out.println(line);
            }
            in.close();
            proc.waitFor();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Java finish calling python...");
    }
}
