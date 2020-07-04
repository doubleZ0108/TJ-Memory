var nowDay = new Date();
var thisYear = nowDay.getFullYear(); 
var thisMonth = nowDay.getMonth() + 1; 
var today = nowDay.getDate();

var dayNum = today.toString(); //用于变更操作
var changeYear = thisYear;
var changeMonth = thisMonth;
var changeDay = dayNum;

var clickDay = null;

var isExistArray = [];
let obj = null;
let counter = 0;


function initLogic(isAwesome=false){
    var now = $('current-year-month');
    var month_left = $('month-left');
    var month_right = $('month-right');
    var year_left = $('year-left');
    var year_right = $('year-right');
    var days = $("days");

    var monthLetter = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    

    /**
     * 刷新页面
     */
    function refresh() {
        for(var i = 1; i <= 42; ++i) {
            $("day" + i).style.disabled = "none";
            $("day" + i).style.opacity = "1";
            $("day-text-" + i).innerHTML = " ";
            $("day-bgcolor-" + i).style.background = "linear-gradient(135deg,#5EFCE8,#736EFE)";
        }
    }

    function subRefresh(year, month, nowMonthStartDay, numberOfDaysInMonth){
        let save_img_day = [];
        for(var i = 1, j = nowMonthStartDay; i <= numberOfDaysInMonth; i++, j++) {
            let DayBgColor = $("day-bgcolor-" + j);

            if(sessionStorage.getItem("isLogin") !== "true"){
                $("day-bgcolor-" + i).style.background = "linear-gradient(135deg,#5EFCE8,#736EFE)";
            } else {
                let save_day_index = j;
                let save_day = $("day-bgcolor-" + save_day_index);
                let existItem = isExist(obj, changeYear, changeMonth+1, i);
                if(existItem == false){
                    save_day.style.background = "linear-gradient(135deg,#5EFCE8,#736EFE)";
                } else {
                    setStyle(save_day, {
                        background: "url(" + existItem.imgbase + ")",
                    });
                }

                setStyle(save_day, {
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                });
            }
        }

        // save_img_day.forEach(function (day_index) {
        //     let existItem = isExist(obj, changeYear, changeMonth+1, day_index);
        //     let save_day = $("day-bgcolor-" + (day_index+nowMonthStartDay-1));
        //     setStyle(save_day, {
        //         background: "url(" + existItem.imgbase + ")",
        //     });
        //     setStyle(save_day, {
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //     });
        // });
    }

    /**
     * 显示某年某月的信息
     */
    function printDays(year, month) {
        refresh();

        isExistArray = [];

        var nowMonthStartDay = new Date(year, month - 1, 1).getDay();   //当前月第一天是周几
        if(nowMonthStartDay == 0) {
            nowMonthStartDay = 7;
        }
        var numberOfDaysInMonth = new Date(year, month, 0).getDate();   //当前月有多少天
        now.innerHTML = " ";
        now.innerHTML = monthLetter[month - 1] + '<br />' + year;        //改变title的内容

        /*========= TODO: 取后端数据 ===========*/
        if(sessionStorage.getItem("isLogin") === "true"){

            startLoader();

            let calendarInfo = {
                "username": sessionStorage.getItem("username"),
                "picyear": changeYear,
                "picmonth": changeMonth + 1,
            };
            connectToBackEnd(calendarInfo, "calendar")
                .then(result => {

                    stopLoad();

                    obj = [];
                    if(result['state'] === 'true'){
                        obj = result["photos"];

                        //TODO init history
                        initHistory(result["photos"]);

                        // TODO 请求后端该年该月数据完毕
                        for(var i = 1, j = nowMonthStartDay; i <= numberOfDaysInMonth; i++, j++) {  //判断变色的日期

                            // for basic calendar
                            var DayText = $("day" + j);
                            var DayBgColor = DayText;

                            // for awesome calendar
                            let exact_index = j + nowMonthStartDay - 1;
                            if(isAwesome){
                                DayText = $("day-text-" + j);
                                DayBgColor = $("day-bgcolor-" + j);
                            }

                            let existItem = isExist(obj, changeYear, changeMonth+1, j);
                            if(existItem != false){
                                isExistArray.push(j.toString());
                                $("day-description-" + exact_index).innerHTML = existItem.description;

                                setStyle($("day-bgcolor-" + exact_index), {
                                    // background: "url(" + "../db/" + existItem.picurl + ")",
                                    background: "url(" + existItem.imgbase.replace(/[\r\n]/g,"") + ")",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                });
                            }

                            // setStyle(DayBgColor, {
                            //     backgroundSize: "cover",
                            //     backgroundPosition: "center",
                            // });


                            DayText.innerHTML = "" + i;
                            if(year == thisYear && month == thisMonth && i.toString() == dayNum) {   //当前日期一直是红色
                                setStyle(DayBgColor, {
                                    background: '#E96D71'
                                });
                            }
                            if(i.toString() == changeDay) {     //选中的符合要求的日期显示绿色
                                DayBgColor.style = "background:#1abc9c";
                                let freshDay = new Date(changeYear, changeMonth-1, changeDay);
                                let weekNum = (freshDay.getDay() + 7 - 1) % 7;

                                if(weekNum === 6) {
                                    $("week-bg").style.left = "calc(calc(calc(var(--button-width) + var(--week-padding))*" + weekNum + ") - calc(var(--week-padding)*0.5))";
                                } else {
                                    $("week-bg").style.left = "calc(calc(var(--button-width) + var(--week-padding))*" + weekNum + ")";
                                }
                            }
                        }

                        // 仅用不属于这个月的信息
                        for(let i = 1; i <= 42; ++i) {
                            let text = null;
                            if(isAwesome){
                                text = $("day-text-" + i).innerHTML;
                            } else {
                                text = $("day" + i).innerHTML;
                            }

                            if(isNaN(parseInt(text))) {
                                var Day = $("day" + i);
                                Day.disabled = "disabled";
                                Day.style.opacity = "0";
                            }
                        }
                    } else {
                        alert(result['msg'] + "加载同济日历，请刷新尝试");
                    }
                })
                .catch(error => console.log(error));
        } else {
            console.log("未登陆");
            // TODO 未登陆
            for(var i = 1, j = nowMonthStartDay; i <= numberOfDaysInMonth; i++, j++) {  //判断变色的日期

                // for basic calendar
                var DayText = $("day" + j);
                var DayBgColor = DayText;

                // for awesome calendar
                if(isAwesome){
                    DayText = $("day-text-" + j);
                    DayBgColor = $("day-bgcolor-" + j);
                }

                setStyle(DayBgColor, {
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                });


                DayText.innerHTML = "" + i;
                if(year == thisYear && month == thisMonth && i.toString() == dayNum) {   //当前日期一直是红色
                    setStyle(DayBgColor, {
                        background: '#E96D71'
                    });
                }
                if(i.toString() == changeDay) {     //选中的符合要求的日期显示绿色
                    DayBgColor.style = "background:#1abc9c";
                    let freshDay = new Date(changeYear, changeMonth-1, changeDay);
                    let weekNum = (freshDay.getDay() + 7 - 1) % 7;

                    if(weekNum === 6) {
                        $("week-bg").style.left = "calc(calc(calc(var(--button-width) + var(--week-padding))*" + weekNum + ") - calc(var(--week-padding)*0.5))";
                    } else {
                        $("week-bg").style.left = "calc(calc(var(--button-width) + var(--week-padding))*" + weekNum + ")";
                    }
                }
            }

            // 仅用不属于这个月的信息
            for(let i = 1; i <= 42; ++i) {
                let text = null;
                if(isAwesome){
                    text = $("day-text-" + i).innerHTML;
                } else {
                    text = $("day" + i).innerHTML;
                }

                if(isNaN(parseInt(text))) {
                    var Day = $("day" + i);
                    Day.disabled = "disabled";
                    Day.style.opacity = "0";
                }
            }
        }
    }

    function subPrintDays(year, month){

        var nowMonthStartDay = new Date(year, month - 1, 1).getDay();   //当前月第一天是周几
        if(nowMonthStartDay == 0) {
            nowMonthStartDay = 7;
        }
        var numberOfDaysInMonth = new Date(year, month, 0).getDate();   //当前月有多少天

        subRefresh(year, month, nowMonthStartDay, numberOfDaysInMonth);


        for(var i = 1, j = nowMonthStartDay; i <= numberOfDaysInMonth; i++, j++) {  //判断变色的日期

            // for basic calendar
            var DayText = $("day" + j);
            var DayBgColor = DayText;

            // for awesome calendar
            if(isAwesome){
                DayText = $("day-text-" + j);
                DayBgColor = $("day-bgcolor-" + j);
            }

            DayText.innerHTML = "" + i;
            if(year == thisYear && month == thisMonth && i.toString() == dayNum) {   //当前日期一直是红色
                setStyle(DayBgColor, {
                    background: '#E96D71'
                });
            }
            if(i.toString() == changeDay) {     //选中的符合要求的日期显示绿色
                DayBgColor.style = "background:#1abc9c";
                let freshDay = new Date(changeYear, changeMonth-1, changeDay);
                let weekNum = (freshDay.getDay() + 7 - 1) % 7;

                if(weekNum === 6) {
                    $("week-bg").style.left = "calc(calc(calc(var(--button-width) + var(--week-padding))*" + weekNum + ") - calc(var(--week-padding)*0.5))";
                } else {
                    $("week-bg").style.left = "calc(calc(var(--button-width) + var(--week-padding))*" + weekNum + ")";
                }
            }
        }
    }

    printDays(thisYear, thisMonth);

    month_left.onclick = function() {
        if(changeMonth == 1) {
            changeYear--;
            changeMonth = 12;
        } else {
            changeMonth--;
        }
        changeDay = 0; //翻页的时候将选中的日期清空
        printDays(changeYear, changeMonth); //打印下一个月的日期
    };
    month_right.onclick = function() {
        if(changeMonth == 12) {
            changeYear++;
            changeMonth = 1;
        } else {
            changeMonth++;
        }
        changeDay = 0;
        printDays(changeYear, changeMonth);
    };

    year_left.onclick = function(){
        changeYear--;
        changeDay = 0;
        printDays(changeYear, changeMonth);
    };
    year_right.onclick = function(){
        changeYear++;
        changeDay = 0;
        printDays(changeYear, changeMonth);
    };


    var click_counter = 0;
    days.onclick = function(e) {
        clickDay = null;

        try{
            clickDay = e.target.firstElementChild.firstElementChild.innerHTML;
        }
        catch(error){
            clickDay = e.target.innerHTML;
        }

        changeDay = clickDay;

        click_counter++;
        setTimeout(function () {
            click_counter = 0;
        }, 500);
        if (click_counter > 1) {
            dblEventCallback(event);
            click_counter = 0;
        }

        subPrintDays(changeYear, changeMonth);

        if(isExistArray.indexOf(clickDay) !== -1){
            panoramaHref(changeYear, changeMonth+1, clickDay);
        }

    };

    $('current-year-month').onclick = function(){
        changeYear = thisYear;
        changeMonth = thisMonth;
        changeDay = today;
        printDays(changeYear, changeMonth);
    };

    async function dblEventCallback(event){
        if(sessionStorage.getItem("isLogin") === "true"){
            let now = {
                year: changeYear,
                month: changeMonth+1,
                day: clickDay
            };
            if(isExistArray.indexOf(now.day) === -1){
                /* input file callback */
                var evt = new MouseEvent("click", {
                    bubbles: false,
                    cancelable: false,
                    view: window
                });

                let myinput = $('myinput');
                myinput.dispatchEvent(evt);
                myinput.onchange = function (){
                    // TODO 用户选择好文件点击确定
                    let imageType = /^image\//;

                    if(this.files.length){
                        var _description = prompt("请输入你的回忆描述");
                        if(_description==null || _description==""){
                            alert("输入的回忆不能为空");
                            return;
                        }
                        event.target.parentElement.nextElementSibling.firstElementChild.innerHTML = _description;
                        isExistArray.push(now.day.toString());

                        /******* 多张图片处理逻辑 *********/
                        let fileappidx = null;
                        let total = this.files.length;
                        counter = 0;

                        for(var i=0; i<this.files.length; ++i){
                            let file = this.files[i];
                            fileappidx = file.type.substring(file.type.indexOf("/")+1);
                            let reader = new FileReader();
                            if (!imageType.test(file.type)) {
                                alert("请选择图片, 该类型的文件不受支持!");
                                return;
                            }

                            let imgbase64 = reader.result;

                            //新建 FileReader 对象
                            reader.onload = function(){
                                counter ++;
                                let _imgname = getIndexStr(now.year) + "-" +
                                    getIndexStr(now.month) + "-" +
                                    getIndexStr(now.day) + "." + fileappidx;

                                let data_from_front = {
                                    username: sessionStorage.getItem("username"),
                                    picyear: now.year,
                                    picmonth: now.month,
                                    picday: now.day,
                                    description: _description,
                                    imgbase: this.result,
                                    imgurl: sessionStorage.getItem("username") + "/" + _imgname,
                                    index: counter,
                                    length: total,
                                };

                                let itemBg = event.target.previousElementSibling.firstElementChild;
                                setStyle(itemBg, {
                                    background: "url(" + this.result + ")",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                });

                                connectToBackEnd(data_from_front, "add_picture")
                                    .then(result => {
                                        if(result['state'] === 'true'){

                                            obj.push({
                                                description: data_from_front.description,
                                                picyear: data_from_front.picyear,
                                                picmonth: data_from_front.picmonth,
                                                picday: parseInt(data_from_front.picday),
                                                username: data_from_front.username,
                                                imgbase: this.result,
                                                picurl: data_from_front.imgurl
                                            });

                                        } else {
                                            alert(result['msg'] + "添加图片失败，请刷新尝试");
                                        }
                                    })
                                    .catch(error => console.log(error));

                            };

                            // 设置以什么方式读取文件，这里以base64方式
                            reader.readAsDataURL(file);

                        }

                        /******* END 多张图片处理逻辑 *********/
                    }
                };
            }
            else{
                alert("已经添加过回忆~");
            }
        } else {
            alert("登陆以添加回忆!")
        }
    }
}


function isExist(obj, year, month, day){
    for(let i=0;i<obj.length;i++){
        let elem = obj[i];
        if(year==elem.picyear && month==elem.picmonth && day==elem.picday){
            return elem;
        }
    }
    return false;
}


function panoramaHref(year, month, day){
    let elem = isExist(obj, year, month, day);
    // window.location.href = "panorama?target=_blank&" + "imgurl=" + elem.picurl;
    let hrefurl = elem.picurl.replace("-comp", "");
    window.open("panorama?" + "imgurl=" + hrefurl, "_blank");
}