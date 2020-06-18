function initShare(){
    let myshare_config = {
        sites: ['qq','wechat', 'qzone', 'weibo'],
        source: "来自doubleZ的创造世界",
        title: "济·忆 Tongji Memory",
        description: "用全景记录同济生活",
        image: 'https://images.ctfassets.net/xxtux6fpv1vm/4grVXq8aHdjF4AEoU4ZUN0/ecbb590b7b9a4d979166347f32b6ab12/03.png',
        wechatQrcodeTitle: "济·忆 - 用全景记录同济生活"
    };
    socialShare('#myshare', myshare_config);
}