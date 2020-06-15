function initWaveSection() {
    setInterval(function(){
        readJson("tongji.json")
        .then(tongjiObj => {
            document.querySelectorAll('.WaveSectionGroup').forEach(function(elem){
                let index = getRandomNum(1, 12);
                let index_str = getIndexStr(index);
        
                elem.style.backgroundImage = "url('../img/tongji/bg/" + index_str + ".png')";
        
                let titleDiv = elem.lastElementChild;
                let logoImg = titleDiv.previousElementSibling;
                logoImg.src = "../img/tongji/sign/" + index_str + ".png";
                let textP = titleDiv.firstElementChild.nextElementSibling;
                textP.innerHTML = tongjiObj["tongji"][index-1]["name"];
            });
        })
        .catch(error => console.log(error));
    }, 6180);
}