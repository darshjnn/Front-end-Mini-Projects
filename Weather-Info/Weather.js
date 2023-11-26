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

//FOR CURRENT LOCATION
var img = document.getElementById("weathImg");
var desc = document.getElementById("description");


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
                const { temp } = data.main;
                const place = data.name;
                desc.textContent = data.weather[0].description;
                desc.textContent = desc.textContent.charAt(0).toUpperCase() + desc.textContent.slice(1);
                if(desc.textContent.includes("aze")){
                    img.src = '/Front-end-Mini-Projects/Weather-Info/Images/rain.png'
                }
            })
        })
    }
};

