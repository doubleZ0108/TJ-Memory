function initSocialMedia(){
    let socialMedia = $('SocialMediaGroup');
    readJson("socialmedia.json")
        .then(socialmediaObj => {
            socialmediaObj["socialmedia"].forEach(function(elem){
                let socialmediaDiv = $c('div');
                socialmediaDiv.classList.add("SocialMediaIcon");
                let socialmediaA = $c('a');
                socialmediaA.href = elem.href;
                socialmediaA.title = elem.title;
                socialmediaA.target = "_blank";
                let socialmediaI = $c('i');
                socialmediaI.classList.add("iconfont");
                socialmediaI.classList.add(elem.class);
                socialmediaI.style.color = elem.color;

                socialmediaA.appendChild(socialmediaI);
                socialmediaDiv.appendChild(socialmediaA);
                socialMedia.appendChild(socialmediaDiv);
            });
        })
        .catch(error => console.log(error));
}