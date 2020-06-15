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
let sdf;

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
        (async function () {
            let obj = await readJson("testcalendar.json");  //获取这一月的信息

            for(var i = 1, j = nowMonthStartDay; i <= numberOfDaysInMonth; i++, j++) {  //判断变色的日期

                // for basic calendar
                var DayText = $("day" + j);
                var DayBgColor = DayText;
    
                // for awesome calendar
                if(isAwesome){
                    DayText = $("day-text-" + j);
                    DayBgColor = $("day-bgcolor-" + j);
                }

                let existItem = isExist(obj, changeYear, changeMonth+1, j);
                if(existItem != false){
                    isExistArray.push(j.toString());
                    $("day-description-" + j).innerHTML = existItem.description;
                    setStyle(DayBgColor, {
                        background: "url(" + existItem.imgUrl + ")",
                    });
                }
                
                setStyle(DayBgColor, {
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                });

    
                DayText.innerHTML = "" + i;
                if(year == thisYear && month == thisMonth && i.toString() == dayNum) {   //当前日期一直是红色
                    setStyle(DayBgColor, {
                        background: '#E96D71',
                        border: '1px solid yellow',
                        borderTop: 'none'
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
        })();
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
    }
    month_right.onclick = function() {
        if(changeMonth == 12) {
            changeYear++;
            changeMonth = 1;
        } else {
            changeMonth++;
        }
        changeDay = 0;
        printDays(changeYear, changeMonth);
    }

    year_left.onclick = function(){
        changeYear--;
        changeDay = 0;
        printDays(changeYear, changeMonth);
    }
    year_right.onclick = function(){
        changeYear++;
        changeDay = 0;
        printDays(changeYear, changeMonth);
    }


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

        printDays(changeYear, changeMonth);
    }

    $('current-year-month').onclick = function(){
        printDays(thisYear, thisMonth);
        changeYear = thisYear;
        changeMonth = thisMonth;
        changeDay = today;
    }

    async function dblEventCallback(){
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
                let imageType = /^image\//;

                if(this.files.length){
                let file = this.files[0];
                let reader = new FileReader();

                if (!imageType.test(file.type)) {
                    alert("请选择图片, 该类型的文件不受支持!");
                    return;
                    }

                //新建 FileReader 对象
                reader.onload = function(){
                    console.log(this.result);
                    $("day-bgcolor-" + 10).style.background = "url(" + this.result + ")";
                };
                // 设置以什么方式读取文件，这里以base64方式
                reader.readAsDataURL(file);
                }
            };
        }
    }

    // Array.from(document.querySelectorAll(".cover-content-container")).forEach((card)=>{
    //     card.addEventListener("dblclick",(e)=>{

    //         let now = {
    //             year: changeYear,
    //             month: changeMonth+1,
    //             day: clickDay
    //         };
    //         if(isExistArray.indexOf(now.day) === -1){
    //             /* input file callback */
    //             var evt = new MouseEvent("click", {
    //                 bubbles: false,
    //                 cancelable: false,
    //                 view: window
    //             });
                
    //             let myinput = $('myinput');
    //             myinput.dispatchEvent(evt);
    //             myinput.onchange = function (){
    //                 let imageType = /^image\//;

    //                 if(this.files.length){
    //                 let file = this.files[0];
    //                 let reader = new FileReader();

    //                 if (!imageType.test(file.type)) {
    //                     alert("请选择图片, 该类型的文件不受支持!");
    //                     return;
    //                     }

    //                 //新建 FileReader 对象
    //                 reader.onload = function(){
    //                     console.log(this.result);
    //                     $("day-bgcolor-" + 10).style.background = "url(" + this.result + ")";
    //                 };
    //                 // 设置以什么方式读取文件，这里以base64方式
    //                 reader.readAsDataURL(file);
    //                 }
    //             };
    //         }

            
    //     });
    // });
}


function isExist(obj, year, month, day){
    for(let i=0;i<obj.length;i++){
        let elem = obj[i];
        if(year===elem.year && month===elem.month && day===elem.day){
            return elem;
        }
    }
    return false;
}