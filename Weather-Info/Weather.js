const api = 'e56c98b6c46e2f59292e98584533a385';

var long;
var lat;

var contain = document.getElementById("container");
var video = document.getElementById("bgVdo");
var img = document.getElementById("weathImg");
var desc = document.getElementById("description");
var temp = document.getElementById("temp");
var inpLoc = document.getElementById("location");
var city = document.getElementById("city");
var humidity = document.getElementById("humid");
var speed = document.getElementById("speed");

//FOR INPUT FUNCTION
var locat = document.getElementById("location");
locat.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
});
async function getWeather() {
    var position = locat.value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${position}&appid=${api}&units=metric`; 
    console.log(apiUrl);
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    
    if (response.status == 404){
        document.getElementById("error").style.display = "block";
        contain.style.background = 'rgba(0, 0, 0, 0.3)';
        temp.textContent = "-- °C";
        video.src = '/Front-end-Mini-Projects/Weather-Info/Videos/loop.mp4';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/noValue.png';
        city.textContent = "Enter Valid Location";
        desc.textContent = "---";
        humidity.textContent = "-- %";
        speed.textContent = "-- Km/hr";
        
    } else {
        document.getElementById("error").style.display = "none";
    }
    
    temp.textContent = data.main.temp + "°C";
    inpLoc.value = data.name;
    city.textContent = data.name;
    desc.textContent = data.weather[0].description;
    desc.textContent = desc.textContent.charAt(0).toUpperCase() + desc.textContent.slice(1);
    humidity.textContent = data.main.humidity + "%";
    speed.textContent = data.wind.speed + " Km/hr";
    getImgBg();
}

//FOR CURRENT LOCATION
async function myLoc() {
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
                document.getElementById("error").style.display = "none";
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
    if (desc.textContent.includes("cast")) {         //DONE
        contain.style.background = 'linear-gradient(-45deg, rgba(198, 151, 73, 0.6), rgba(40, 42, 58, 0.6))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/overcast-clouds.png';
        video.src = '/Front-end-Mini-Projects/Weather-Info/Videos/overcast-clouds.mp4';
        contain.style.color = "rgba(255, 246, 224, 1)"         
    } else if (desc.textContent.includes("lear")) {  //DONE
        contain.style.background = 'linear-gradient(-45deg, rgba(255, 214, 165, 0.1), rgba(255, 254, 196, 0.1))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/clear.png';
        video.src = '/Front-end-Mini-Projects/Weather-Info/Videos/clear.mp4';
        contain.style.color = "rgba(238, 242, 150, 1)"
    } else if (desc.textContent.includes("oud")) {     //DONE
        contain.style.background = 'linear-gradient(-45deg, rgba(48, 129, 200, 0.4), rgba(109, 185, 239, 0.4))';
        video.src = '/Front-end-Mini-Projects/Weather-Info/Videos/clouds.mp4'
        contain.style.color = "rgba(0, 0, 0, 1)"
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/cloud.png';
    } else if (desc.textContent.includes("izzle")) {     //NEED TO ADD VIDEO
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/drizzle.png';
        contain.style.color = "rgba(255, 246, 224, 1)"         
    } else if (desc.textContent.includes("hower")) {      //NEED TO ADD VIDEO
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/drizzle.png';
        contain.style.color = "rgba(255, 246, 224, 1)"         
    } else if (desc.textContent.includes("ain")) {     //NEED TO ADD VIDEO
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/rain.png';
        contain.style.color = "rgba(255, 246, 224, 1)"         
    } else if (desc.textContent.includes("torm")) {     //NEED TO ADD VIDEO
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/thunder.png';
        contain.style.color = "rgba(255, 246, 224, 1)"         
    } else if (desc.textContent.includes("now")) {     //NEED TO ADD VIDEO
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/snow.png';
        contain.style.color = "rgba(255, 246, 224, 1)"         
    } else if (desc.textContent.includes("ist")) {       //DONE
        contain.style.background = 'linear-gradient(-45deg, rgba(82, 109, 130, 0.1), rgba(157, 178, 191, 0.1))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/mist.png';
        video.src = '/Front-end-Mini-Projects/Weather-Info/Videos/mist.mp4';
        contain.style.color = "rgba(255, 246, 224, 1)";         
    } else if (desc.textContent.includes("aze")) {     //DONE
        contain.style.background = 'linear-gradient(-45deg, rgba(255, 235, 216, 0.2), rgba(147, 140, 162, 0.4))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/haze.png';
        video.src = '/Front-end-Mini-Projects/Weather-Info/Videos/haze.mp4';
        contain.style.color = "rgba(43, 42, 76, 1)";         
    } else if (desc.textContent.includes("Fog") || desc.textContent.includes("Smoke")) { //NEED TO ADD VIDEO
        contain.style.background = 'linear-gradient(-45deg, rgb(247, 140, 162), rgb(147, 140, 162))';
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/fog.png';
        contain.style.color = "rgba(255, 246, 224, 1)"         
    }  
    else {
        contain.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
        img.src = '/Front-end-Mini-Projects/Weather-Info/Images/noValue.png';
        contain.style.color = "rgba(255, 246, 224, 1)";
        video.src = '/Front-end-Mini-Projects/Weather-Info/Videos/loop.mp4';
    }
}

//VIDEO CONTROLS
var vdoBttn = document.getElementById("vdoBttn");
function vdoOper(){
    if(video.paused){
        video.play();
        vdoBttn.innerHTML = "Pause Video";
    } else{
        video.pause();
        vdoBttn.innerHTML = "Play Video"
    }
}