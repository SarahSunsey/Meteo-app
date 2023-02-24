const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const weatherBox  = document.querySelector(".weather-box")
const picture=document.querySelector(".weather-box img")
const weatherDetails = document.querySelector(".weather-detail")
const humidity=document.querySelector(".hum");
const temperature=document.querySelector(".temperature")
const error = document.querySelector(".not-found")
const des=document.querySelector(".des")
const region=document.querySelector(".region")
search.addEventListener('click', () => {

    //const APIKey = 'ba89399e8508ad37e05f5a512f85ca66';
    const city = document.querySelector('.search-box input').value;
    //let lat = -33.8568;
    //let lon= 151.2153;
    if(city=='')
        return
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b2792820e2mshf4b26fab4d02a3fp1e6c02jsn0f1763707578',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            if (response.error) {
                container.style.height = '600px';
                error.style.display = 'flex';
                weatherDetails.style.display='none'
                weatherBox.style.display='none'
                return;
              }
              error.style.display='none';
              if (response.location && response.current) {
                container.style.height = '600px';
               let regionn=response.location.name;
               region.innerHTML=regionn;
                let text =response.current.condition.text;
                des.innerHTML=text;
                console.log(text);
                temperature.innerHTML = response.current.temp_c+"℃"; 
                let mood =text.includes("rain");
                if(mood){
                    picture.src='https://cdn-icons-png.flaticon.com/512/1146/1146858.png'
                }
                mood=text.includes("Sun");
                if(mood){
                    picture.src='https://cdn-icons-png.flaticon.com/512/979/979585.png'
                    console.log("sunny"+mood);
                }
                mood=text.includes("sun");
                if(mood){
                    picture.src='https://cdn-icons-png.flaticon.com/512/979/979585.png'
                    console.log("sunny"+mood);
                }
                mood=text.includes("Clear")
                if(mood){
                    picture.src='https://cdn-icons-png.flaticon.com/512/979/979585.png'
                    console.log("sunny"+mood);
                }
                mood=text.includes("cloud");
                if(mood){
                    picture.src='https://cdn-icons-png.flaticon.com/512/414/414927.png'
                    console.log("cloud"+mood);
                }
                mood=text.includes("overcast");
                if(mood){
                    picture.src='https://cdn-icons-png.flaticon.com/512/414/414927.png'
                    console.log("cloud"+mood);
                }
                let humidityy=response.current.humidity;
                humidity.innerHTML=humidityy;
                humidity.style.margin.left='10px'
                weatherDetails.style.display='flex'
                console.log(`The current temperature is ${response.current.temp_c}°C`);
                return;
              }
    }
        )
        
          
        

    /*fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`).then(response => response.json()).then(json => {
        console.log(response);
            if (json.cod === '401') {
        container.style.height = '400px';
         weatherBox.style.display = 'none';
        weatherDetails.style.display = 'none';
        error.style.display = 'block';
        return;
        }
        error.style.display = 'none';

        const image = document.querySelector(".weather-box img")
        const temperature = document.querySelector(".weather-box .temperature")
        const description = document.querySelector(".weather-box description")
})*/

})