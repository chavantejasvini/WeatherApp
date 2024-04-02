let key = '22b883ca0526b8ea69e8be079d55aeb7';
let city = document.getElementById('city');
let description = document.getElementById('description');
let windspeed = document.getElementById('windspeed');
let humidity = document.getElementById('humidity');
let temp = document.getElementById('temp');

function fetchData(){
    let cityname = document.getElementById('cityname').value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;

    fetch(api)
    .then(response=>response.json())
    .then(data=>{
        city.innerHTML=data.name;
        desc.innerHTML=data.weather[0].description;
        windspeed.innerHTML=data.wind.speed;
        hum.innerHTML=data.main.humidity;
        temp.innerHTML=data.main.temp-273;
    })
}