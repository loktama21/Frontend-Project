//for time and date app
let dateClass = document.querySelector('.date');

setInterval(function(){
    getTime();
    getDate();
}, 1000);

function getTime(){
    var todayDate = new Date();
    let time = document.querySelector('.time');
    let hr = todayDate.getHours();
    hr = (hr<10?'0':'')+ hr;
    let min = todayDate.getMinutes();
    min = (min<10?'0':'')+ min;
    let sec = todayDate.getSeconds();
    sec = (sec<10?'0':'')+ sec;
    time.innerHTML = 'Time: ' + hr + ':' + min + ':' + sec;
    return time.innerHTML;
}

function getDate(){
    var todayDate = new Date();
    let months = ['JAN', 'Feb', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    let date = todayDate.getDate();
    let month = months[todayDate.getMonth()];
    let year = todayDate.getFullYear();
    dateClass.innerHTML = 'Date: ' + date + ' ' + month + ' ' + year;
    return dateClass.innerHTML;
}



