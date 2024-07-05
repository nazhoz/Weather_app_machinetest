import React, { useEffect, useRef, useState } from "react";

const Weather = () => {

  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(false);
  const [inputError, setInputError] = useState(false);

  const allIcons = {
    "01d": require('../Assets/clear.png'),
    "01n": require('../Assets/clear.png'),
    "02d": require('../Assets/cloud.png'),
    "02n": require('../Assets/cloud.png'),
    "03d": require('../Assets/cloud.png'),
    "03n": require('../Assets/cloud.png'),
    "04d": require('../Assets/drizzle.png'),
    "04n": require('../Assets/drizzle.png'),
    "09d": require('../Assets/rain.png'),
    "09n": require('../Assets/rain.png'),
    "10d": require('../Assets/rain.png'),
    "10n": require('../Assets/rain.png'),
    "13d": require('../Assets/snow.png'),
    "13n": require('../Assets/snow.png'),
  }

  const search = async (city) => {
    if (city === "") {
        setInputError(true)
        return;
    }
    setInputError(false)
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"615f1fbcad4826e2a017e27be72ea304"}`;

      const response = await fetch(url);
      const data = await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || require('../Assets/clear.png')

      const formatTime = (timestamp)=>{
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
      }
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temparture: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
        feels_like: Math.floor(data.main.feels_like),
        sunset: formatTime(data.sys.sunset),
        weather: data.weather[0].main
      });
    } catch (error) {
        setWeatherData(false)
        console.error("Error in Fecthing weather data")
    }
  };

  useEffect(() => {
    search("Delhi");
  }, []);

  return (
    <div className="w-full h-full lg:h-auto flex justify-center items-center sm:w-[75%] lg:w-[65%] sm:ml-10 lg:ml-20 mt-5 sm:mt-0 lg:mt-0">
    <div className="bg-orange-200 w-[80%] sm:w-[75%] lg:w-[50%] h-[50vh] sm:h-[70vh] lg:h-[65vh] flex flex-col justify-evenly items-center rounded-3xl">
      <div className="bg-white/70 backdrop-blur-sm w-[90%] sm:w-[80%] h-14 flex justify-around items-center rounded-lg">
        <input ref={inputRef} placeholder="Enter Your City" type="text" className={`border-2 bg-transparent outline-none ${inputError ? 'border-red-500' : 'border-transparent'}`} />
        <button onClick={() => search(inputRef.current.value)}> <img src={require('../Assets/search.png')} alt="Search" /> </button>
      </div>
      {weatherData ?
        <>
          <div className="flex justify-center items-center">
            <img className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28" src={weatherData.icon} alt="Weather Icon" />
            <span className="text-orange-400 text-4xl sm:text-5xl lg:text-6xl font-medium">{weatherData.temparture}°</span>
          </div>
          <div className="flex flex-col justify-around items-center h-[35%] w-[90%] sm:w-[80%]">
            <span className="text-orange-400">{weatherData.weather}</span>
            <span className="text-orange-400">{weatherData.location}</span>
            <span className="text-orange-400">21, Oct 2019</span>
            <span className="text-orange-400">Feels like {weatherData.feels_like} | Sunset {weatherData.sunset}</span>
          </div>
        </>
        :
        <>
        </>
      }

    </div>
  </div>
  );
};

export default Weather;
