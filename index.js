//DOM(Document Object Module)
const title = document.querySelector("#title");
title.innerHTML="Hi! From JS";
title.style.color="red";
document.title = "I own you now";

//Events and event handlers
function handleResize(){
    console.log("I have been resized")
}

window.addEventListener("resize", handleResize); // 윈도우 사이즈가 변경될 때 함수 호출됨
window.addEventListener("resize", handleResize()); // 즉시 함수 호출됨

//argument = event
const title = document.querySelector("#title");

function handleResize(event){
    console.log(event);
}
window.addEventListener("resize",handleResize);

//click
const title = document.querySelector("#title");

function handleClick(){
    title.syle.color = "red";
}

title.addEventListener("click",handleClick);

//if-else, prompt
const age = prompt("How old are you?");

if(age>18&&age<21){
    console.log("you can drink but you should not");
}else{
    console.log("you cant");
}