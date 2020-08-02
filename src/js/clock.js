const clockTitle = document.querySelector(".js-clock");

function getDoubleDigit(num){
    if(num<10){
        return `0${num}`;
    }
    return `${num}`;
}

function getTime(){
    const date = new Date();
    const minutes = getDoubleDigit(date.getMinutes());
    const hours = getDoubleDigit(date.getHours());
    clockTitle.innerText = `${hours}:${minutes}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();