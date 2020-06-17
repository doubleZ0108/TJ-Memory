function initHistory(){

    let totalNum = 0;
    let historygroup = $('HistoryGroup');
    let history = $('HistoryList');
    history.innerHTML = "";

    if(sessionStorage.getItem("isLogin") === "true"){
        let username = {
            "username": sessionStorage.getItem("username")
        };
        connectToBackEnd(username, "history")
            .then(result => {
                if(result['state'] === 'true'){
                    console.log("刷新历史图片成功");

                    totalNum = result['history'].length;
                    if(totalNum > 0){
                        result['history'].forEach(function (card, i) {
                            let index = i%12 + 1;
                            let index_str = getIndexStr(index);

                            let historycardLi = $c('li');
                            historycardLi.classList.add('HistoryCard');
                            setStyle(historycardLi, {
                                "width": 100/totalNum + "%"
                            });

                            let historycardImg = $c('img');
                            //TODO history image路径
                            historycardImg.src = "../db/" + card.imgurl;

                            let contentDiv = $c('div');
                            contentDiv.classList.add('Content');

                            contentDiv.innerHTML = card.pictime.slice(0,10) + " " + card.description;


                            historycardLi.appendChild(historycardImg);
                            historycardLi.appendChild(contentDiv);

                            history.appendChild(historycardLi);

                            if(totalNum !== 1){
                                historycardLi.addEventListener('mouseover', function(){
                                    document.querySelectorAll('li.HistoryCard').forEach(function(elem){
                                        elem.style.width = 40/(totalNum-1) + "%";
                                    });
                                    historycardLi.style.width = "60%";
                                });
                                historycardLi.addEventListener('mouseout', function(){
                                    document.querySelectorAll('li.HistoryCard').forEach(function(elem){
                                        elem.style.width = 100/totalNum + "%";
                                    });
                                });
                            } else {
                                setStyle(historycardImg, {
                                    "width": "100%"
                                });
                            }
                        });
                    } else {
                        // 无历史订单
                        initEmptyHistory();
                    }
                } else {
                    alert(result['msg'] + "加载同济印记，请刷新尝试");
                    initEmptyHistory();
                }
            })
            .catch(error => {
                console.log(error);
                initEmptyHistory();
            });
    } else {
        // 未登陆查看历史记录
        initEmptyHistory();
    }
}

function initEmptyHistory(){
    let history = $('HistoryList');
    history.innerHTML = "";

    let totalNum = 12;
    for(let i=0;i<totalNum;++i){
        let index = i%12 + 1;
        let index_str = getIndexStr(index);

        let historycardLi = $c('li');
        historycardLi.classList.add('HistoryCard');
        setStyle(historycardLi, {
            "width": 100/totalNum + "%"
        });

        let historycardImg = $c('img');
        historycardImg.src = "../img/tongji/bg/" + index_str + ".png";

        historycardLi.appendChild(historycardImg);
        history.appendChild(historycardLi);

        historycardLi.addEventListener('mouseover', function(){
            document.querySelectorAll('li.HistoryCard').forEach(function(elem){
                elem.style.width = 40/(totalNum-1) + "%";
            });
            historycardLi.style.width = "60%";
        });
        historycardLi.addEventListener('mouseout', function(){
            document.querySelectorAll('li.HistoryCard').forEach(function(elem){
                elem.style.width = 100/totalNum + "%";
            });
        });
    }
}