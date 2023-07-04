const time = document.querySelector('#time');
const timeFormat = document.querySelector('#timeFormat')


// this will run after html and css file is loded
document.addEventListener('DOMContentLoaded',()=>{

    setInterval(showTime, 1000);

})

function showTime(){

    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    
    
    hour = hour < 10 ? `0${hour}`: hour;
    mins = mins < 10 ? `0${mins}`: mins;
    sec = sec < 10 ? `0${sec}`: sec;

    time.textContent = `${hour} : ${mins} : ${sec}`;

    if(hour>=12){
        timeFormat.textContent = hour>=12 ? 'PM':'AM';
    }
}

console.log(time.textContent);

let date = new Date();


console.log(typeof date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
