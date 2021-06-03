const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById('submitBtn');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const temp_min_max = document.getElementById('temp_min_max');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal == "") {
        city_name.innerText = `Please enter city name`;
    } else {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d18b5ab20239343749a25a24f795a2c1`
            const response = await fetch(url);
            const data = await response.json();

            const arrData =  [data];
            console.log(arrData)
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = `${arrData[0].main.temp}°C`;
            temp_status.innerText = arrData[0].weather[0].main;
            temp_min_max.innerText = `${arrData[0].main.temp_min}°C / ${arrData[0].main.temp_max}°C`;
        } catch {
            city_name.innerText = `Please enter city name properly`;
        }
    }
}

submitBtn.addEventListener('click', getInfo);