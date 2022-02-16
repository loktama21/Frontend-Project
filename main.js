setInterval(function(){
    let dateClass = document.querySelector('.date');
    let time = document.querySelector('.time');
    let todayDate = new Date();
    let months = ['JAN', 'Feb', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
    let date = todayDate.getDate();
    let month = months[todayDate.getMonth()];
    let year = todayDate.getFullYear();
    let hr = todayDate.getHours();
    let min = todayDate.getMinutes();
    let sec = todayDate.getSeconds();
    dateClass.innerHTML = 'Date: ' + date + ' ' + month + ' ' + year;
    time.innerHTML = 'Time: ' + hr + ':' + min + ':' + sec;
}, 1000);

let inputValue = document.querySelector('.inputValue');
let button = document.querySelector('.button');
let name = document.querySelector('.name');
let temp = document.querySelector('.temp');

button.addEventListener('click',
    () => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&appid=f206250c43f3344824e533dfb9b781e4')
        .then(response => response.json())
        .then(data => {
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let tempInF = ((tempValue - 273.15)*1.8)+32;
        tempInF = Number(tempInF).toLocaleString().split('.')[0];
        name.innerHTML = 'City: ' + nameValue;
        temp.innerHTML = 'Temperature: ' + tempInF + '  F';        
    })    
    .catch(err => alert('wrong city name'))
})