var opt, tp;
let year,month,day;

window.onload = function () {
    let imgurl = getParams("imgurl");
    let username = sessionStorage.getItem("username");

    console.log(imgurl);
    if(username!=null && username!==""){
        initPanorama(imgurl, username);
    }
};

function initPanorama(imgurl, username){
    let arr = imgurl.split('/');
    arr = arr[1].split(".");
    arr = arr[0].split("-");

    year = arr[0];
    month = arr[1];
    day = arr[2];

    console.log(arr);
    let data_from_front = {
        username: username,
        picyear: year,
        picmonth: month,
        picday: day,
    };
    connectToBackEnd(data_from_front, "label")
        .then(result => {
            if(result['state'] === 'true'){
                //TODO 读取后端的label数据
                let _lables = [];
                result["labels"].forEach(function (elem) {
                    _lables.push({
                        position: {
                            lon: elem.lon,
                            lat: elem.lat,
                        },
                        logoUrl: '../img/logo.png',
                        text: elem.description,
                    })
                });

                opt = {
                    container: 'panoramaConianer',//容器
                    url: '../db/' + imgurl ,
                    // lables: [
                    //     { position: { lon: -72.00, lat: 9.00 }, logoUrl: '../img/logo.png', text: '蓝窗户' },
                    //     { position: { lon: 114.12, lat: 69.48 }, logoUrl: '../img/logo.png', text: '一片云彩很长很长很长' },
                    //     { position: { lon: 132.48, lat: -12.24 }, logoUrl: '../img/logo.png', text: '大海' }
                    // ],
                    lables: _lables,
                    widthSegments: 60,      //水平切段数
                    heightSegments: 40,     //垂直切段数（值小粗糙速度快，值大精细速度慢）
                    pRadius: 1000,          //全景球的半径，推荐使用默认值
                    minFocalLength: 6,      //镜头最小拉近距离
                    maxFocalLength: 100,    //镜头最大拉近距离
                    sprite: 'label',         // label,icon
                    onClick: (e) => {
                        console.log(e.object.name);
                    }
                };
                tp = new tpanorama(opt);

            } else {
                alert(result['msg'] + "加载同济全景，请刷新尝试");
                initEmptyHistory();
            }
        })
        .catch(error => console.log(error));
}

function myPanorama(){
    tp.render(opt);
}

function getAllSpirites(){
    return tp.def.sprites;
}