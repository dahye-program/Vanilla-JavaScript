const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();

const title = document.querySelector("#title");

const CLICKED_CLASS="clicked";

function handleClick(){
    const currentClass=title.className; //가져와
    if(currentClass!==CLICKED_CLASS){
        title.className=CLICKED_CLASS; //값 세팅
    }else{
        title.className="";
    }
}

function init(){
    title.style.color=BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init();