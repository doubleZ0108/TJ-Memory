let weekList = ["Mon.", "Tues.", "Wed.", "Thur.", "Fri.", "Sat.", "Sun."];


function initAwesomeStructure() {
    let weeks = $("weeks");
    weekList.forEach(function(weekName){
        let weekDiv = $c("div");
        weekDiv.classList.add("week");
        weekDiv.id = weekName;
        weekDiv.style.gridArea = weekName;
        weekDiv.innerHTML = weekName;
        weeks.appendChild(weekDiv);
    });
    let bgDiv = $c("div");
    bgDiv.classList.add("bg");
    bgDiv.id = "week-bg";
    weeks.appendChild(bgDiv);


    let days = $("days");

    var min = -5;
    var max = 5;

    // days.innerHTML = "";

    for(let i = 1; i <= 42; ++i) {
        var randRotation = parseFloat(Math.random()*(min - max + 1) + max);
        days.innerHTML += [
            '<div class="day-group" id="day' + i + '">\n' +
            '    <div class="day-outside">\n' +
            '        <div class="day-shadow"></div>\n' +
            '        <div class="day-paper"" style="grid-area: day-' + i + '; transform: rotate(' + randRotation + 'deg);">\n' +
            '            <div class="day-paper-bg" id="day-bgcolor-' + i + '">\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="cover-content-container">\n' +
            '            <div class="cover-content">\n' +
            '                <h1 id="day-text-' + i + '" style="transform: rotate(' + randRotation + 'deg);">' + i + '</h1>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="day-inside">\n' +
            '        <div id="day-description-' + i + '">用全景记录生活</div>\n' +
            '    </div>\n' +
            '</div>'
        ].join("");
    }
}

