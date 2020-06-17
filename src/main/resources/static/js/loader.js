function startLoader(){
    setStyle($("LoaderGroup"), {
        opacity: "1",
        zIndex: "99999",
    });
}

function stopLoad(){
    setStyle($("LoaderGroup"), {
        opacity: "0",
        zIndex: "-1",
    });
}

function LoaderMouseOver() {
    console.log("over");
    let bar = document.getElementById("bar");
    bar.classList.add("bar-hovered");
}

function LoaderMouseLeave() {
    let bar = document.getElementById("bar");
    bar.classList.remove("bar-hovered");
}