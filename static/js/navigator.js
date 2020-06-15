function initNavigation(flag){
    let navigator = $('navigator');
    
    document.addEventListener('scroll', function () {
        if(self.pageYOffset > 50) {
            navigator.classList.add('NavigationScrolled');
        } else {
            navigator.classList.remove('NavigationScrolled');
        }
    });

    if(flag){
        navigator.classList.add('NavigationScrolled');
    }
    
    initNavigationList();
    initAvatar();
}


function initNavigationList(){
    // let navigationList = $('NavigationList');
    let navigationList = document.getElementById('NavigationList');

    readJson("navigator.json")
        .then(navigatorObj => {
            navigatorObj["navigator"].forEach(function(elem){
                let navigationLi = $c('li');
                let navigationA = $c('a');
                navigationA.href = elem.href;
                navigationA.title = elem.title;
                navigationA.innerHTML = elem.content;
                navigationLi.appendChild(navigationA);
                
                navigationList.appendChild(navigationLi);
            });
        })
        .catch(error => console.log(error));
}


function initAvatar(){
    let avatar = $('avatar');
    if(sessionStorage.getItem("isLogin") === "true"){
        avatar.src = "../img/Avatar/avatar.jpg";
    } else {
        avatar.src = "../img/Avatar/tongji.png";
    }
}