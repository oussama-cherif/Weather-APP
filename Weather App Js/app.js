window.addEventListener('load', ()=> {
    let long;
    let lat;
    const timeZone = document.querySelector ('.location-timezone');
    const icon = document.querySelector ('.weather-icon');
    const temperatureDegree = document.querySelector ('.temperature-degree');
    const temperatureDescription = document.querySelector ('.temperature-description');
    

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${long}&lat=${lat}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "ab8785fc73mshaab86f5e9f135b0p164fe1jsne99c6f05cc73",
                    "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                temperatureDegree.textContent = data.data[0].temp;
                temperatureDescription.textContent = data.data[0].weather.description;
                timeZone.textContent = data.data[0].timezone;
                icon.textContent = data.data[0].weather.icon;
            })
            .catch(err => {
                console.log(err);
            });
        });
    };
    
});
