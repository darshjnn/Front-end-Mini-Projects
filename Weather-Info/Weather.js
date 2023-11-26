const api = 'e56c98b6c46e2f59292e98584533a385';

var long;
var lat;

var locat = document.getElementById("location");
locat.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
});

function getLocation() {
    var position = locat.value;
    alert(position)
}

var contain = document.getElementById("container");
var img = document.getElementById("weathImg");
var desc = document.getElementById("description");
var temp = document.getElementById("temp");
var inpLoc = document.getElementById("location");
var city = document.getElementById("city");
var humidity = document.getElementById("humid");
var speed = document.getElementById("speed");

//FOR CURRENT LOCATION
function myLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            console.log(position);
            console.log(long);
            console.log(lat);
            const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;
            console.log(base);
            fetch(base).then((response) => {
                return response.json();
            }).then((data) => {
                temp.textContent = data.main.temp + "°C";
                inpLoc.value = data.name;
                city.textContent = data.name;
                desc.textContent = data.weather[0].description;
                // desc.textContent = "clear";
                desc.textContent = desc.textContent.charAt(0).toUpperCase() + desc.textContent.slice(1);
                humidity.textContent = data.main.humidity + "%";
                speed.textContent = data.wind.speed + " Km/hr";
                getImgBg();
            })
        })
    }
};

//CHANGE BACKGROUND & IMAGE FUNCTION 
function getImgBg() {
    if (desc.textContent.includes("cast")) {
        contain.style.background = 'linear-gradient(-45deg, rgba(198, 151, 73, 0.6), rgba(40, 42, 58, 0.6))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/overcast-clouds.png';
    } else if (desc.textContent.includes("lear")) {
        contain.style.background = 'linear-gradient(-45deg, rgba(255, 214, 165, 1), rgba(255, 254, 196, 1))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/clear.png';
        contain.style.color = "rgba(35, 45, 63, 1)"
    } else if (desc.textContent.includes("oud")) {
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/cloud.png';
    } else if (desc.textContent.includes("izzle")) {
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/drizzle.png';
    } else if (desc.textContent.includes("hower")) {
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/drizzle.png';
    } else if (desc.textContent.includes("ain")) {
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/rain.png';
    } else if (desc.textContent.includes("torm")) {
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/thunder.png';
    } else if (desc.textContent.includes("now")) {
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/snow.png';
    } else if (desc.textContent.includes("ist")) {
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/mist.png';
    } else {
        contain.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/noValue.png';
    }
}