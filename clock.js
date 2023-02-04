function updateTime()
               {
                let currentTime = new Date();
                let hours = currentTime.getHours();
                let mins = currentTime.getMinutes();
                let seconds = currentTime.getSeconds();
                console.log(hours,mins,seconds);
                document.getElementById('txt').innerHTML =  hours + ":" + mins + ":" + seconds;
                setTimeout(updateTime,1000)
               }
               
               setInterval(updateTime, 1000);

function getWeatherData(city)
{
  const api ={  
    key:  "e8ca3cdb55823a11d990542848797607",
    base: "https://api.openweathermap.org/data/2.5/weather"
  }

  
  fetch(api.base + "?q=" + city + "&units=metric&appid=" + api.key).then(weather =>weather.json())
  .then(result => {
    let tempLabel = document.getElementById("temp");
    // your job is to display city name and temp inyour web page
    // write your code here
    tempLabel.innerHTML = result.name + " " + result.main.temp + "C";
    console.log(result.main.temp, result.name)})
}
getWeatherData("London");

function onTextChange()
{
  const txt = document.getElementById("town-text");
  console.log(txt.value);
  getWeatherData(txt.value)
  hideTxt();
}

function showCityBox()
{
  const txt = doucment.getElementById("town=text");
  txt.style.display = 'box';
}

function hideTxt()
{
  const txt = doucment.getElementById("town=text");
  txt.style.display = 'none';
}
hideTxt();