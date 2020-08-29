const form = document.querySelector(".js-form")
const input = form.querySelector("input")
const gretting = document.querySelector("".js-gretting);

const USER_LS = "currentUser"
const SHOWINT_CN= "showing"

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWINT_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWINT_CN);
    gretting.classList.add(SHOWINT_CN);
    gretting.innerText = `Hello ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser===null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
//일단 미룰까.. 어떻게 해야하지