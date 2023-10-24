let container=document.querySelector(".container");
let SearchInput = document.querySelector(".SearchInput");
let searchBtn = document.querySelector(".searchButton");
let weatherInformation = document.querySelector(".weatherInformation");
EventRun();
function EventRun() {
    searchBtn.addEventListener("click", () => {
        weatherInformation.innerHTML =
            `
        <div class="city"></div>
        <div class="temperature"></div>
        <div class="imgWrapper">
        <img src="" class="icon" alt="photo">
        <div class="description"></div>
        </div>
        <div class="humid"></div>
        <div class="wind"></div>
        `
         container.style.height="auto"
         container.style.padding="20px"
        let city = document.querySelector(".city ");
        let temperature = document.querySelector(".temperature ");
        let description = document.querySelector(".description");
        let humid = document.querySelector(".humid ");
        let wind = document.querySelector(".wind ");
        let iconImage = document.querySelector(".icon");

        InputValue = SearchInput.value;
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${InputValue}&appid=14431e81c671c7029dd58904b6025f95`)
            .then((res) => {
              if(!res.ok){
                alert("No weather found");
              }
              else{
                return res.json();
              }             
            })
            .then(data => {
                console.log(data);
                city.innerHTML = "Weather in" + " " + data.name;
                temperature.innerHTML = data.main.temp + "°C";
                data.weather.forEach(element => {
                    iconImage.src = "https://openweathermap.org/img/wn/" + element.icon + ".png"
                    description.innerHTML = (element.description)
                })
                humid.innerHTML = "Humidity:" + data.main.humidity + "%";
                wind.innerHTML = "Wind:" + data.wind.speed + "km/h";
                document.querySelector("body").style.backgroundImage=  "url('https://source.unsplash.com/1600x900/?" + data.name + "')";
            })
    })
}