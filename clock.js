const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const minutes = date.getMinutes(); //분
    const hours = date.getHours(); //시
    const seconds = date.getSeconds(); //초
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`: seconds}`; // 00:00:00 으로 표기하기 위함
    // 조건 ? 참일때 실행 : 그렇지 않을 때 실행
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();