const apiKey = "15e3c2e49307433daa6d493366c8b7b4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";
async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)

    document.querySelector(".temp").innerHTML = `OVER ${data.main.temp}!`;

    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;

    document.querySelector(".windy").innerHTML = `${data.wind.speed}`;

}

checkWeather();

document.getElementById("butt").onclick = function chara() {
    
    var char = document.getElementById("charu").value;
    char = char.toLowerCase();
    document.getElementById("img").src = `images/${char}.png`
    document.getElementById("img1").src = `images/${char}1.png`

    document.getElementById("img2").src = `images/${char}2.png`
    }

