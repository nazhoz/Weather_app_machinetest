import React, { useEffect, useState } from "react";
import { allIcons } from "./icons";
import { bouncy } from 'ldrs'

const Days = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const allIcon = allIcons;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    return hours + ":" + minutes.substr(-2);
  };

  const fetchForecast = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const apiKey = "615f1fbcad4826e2a017e27be72ea304";
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
      const response = await fetch(forecastUrl);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      const hourly = data.list.slice(0, 10).map((entry) => ({
        time: formatTime(entry.dt),
        icon: allIcon[entry.weather[0].icon] || require("../Assets/clear.png"),
        weather: entry.weather[0].main,
      }));
      setForecast(hourly);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecast(city);
  }, [city]);

  if (loading) {

    bouncy.register();
    return (
      <div className="flex justify-center items-center h-full">
        <l-bouncy size="150" speed="1.75" color="white"></l-bouncy>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col justify-evenly items-center w-full lg:w-[50%] h-full lg:h-auto mr-5 sm:mr-10 lg:mr-20">
      <div className="backdrop-blur-sm bg-orange-200/50 w-[90%] sm:w-[75%] lg:w-[80%] h-[30vh] sm:h-[30vh] lg:h-[30vh] flex flex-col justify-around items-center rounded-md">
        <div className="flex justify-around items-center w-full">
          {forecast.slice(0, 5).map((hour, index) => (
            <div key={index}>
              <span className="text-white">{hour.time}</span>
              <img className="w-10 h-10" src={hour.icon} alt={hour.weather} />
            </div>
          ))}
        </div>

        <div className="flex justify-around items-center w-full">
          {forecast.slice(5, 10).map((hour, index) => (
            <div key={index}>
              <span className="text-white">{hour.time}</span>
              <img className="w-10 h-10" src={hour.icon} alt={hour.weather} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] sm:w-[75%] lg:w-[80%]">
        <span className="text-white text-center">Random Text</span>
        <br />
        <span className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, iure!
        </span>
      </div>
    </div>
  );
};

export default Days;
