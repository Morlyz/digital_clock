const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

setInterval(() => {
    let clock = new Date();

    hrs.innerHTML = (clock.getHours()<10?"0":"") + clock.getHours();
    min.innerHTML = (clock.getMinutes()<10?"0":"") + clock.getMinutes();
    sec.innerHTML = (clock.getSeconds()<10?"0":"") + clock.getSeconds();  
}, 1000);
