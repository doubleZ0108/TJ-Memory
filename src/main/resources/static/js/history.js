
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

function initHistory(photosobj){

    console.log(photosobj);

    let totalNum = 0;
    let history = $('HistoryList');
    history.innerHTML = "";

    totalNum = photosobj.length;
    if(totalNum > 0){
        photosobj.forEach(function (card, i) {
            let index = i%12 + 1;
            let index_str = getIndexStr(index);

            let historycardLi = $c('li');
            historycardLi.classList.add('HistoryCard');
            setStyle(historycardLi, {
                "width": 100/totalNum + "%"
            });

            let historycardImg = $c('img');
            //TODO history image路径
            // historycardImg.src = "../db/" + card.imgurl;
            historycardImg.src = card.imgbase;

            let contentDiv = $c('div');
            contentDiv.classList.add('Content');

            console.log(card);
            // contentDiv.innerHTML = card.pictime.slice(0,10) + " " + card.description;
            contentDiv.innerHTML = card.picyear.toString() + "-" + card.picyear.toString() + "-" + card.picyear.toString() + " "
                                    + card.description;


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
    }
}