import React from 'react';
import './currentweather.css'; 

//Returns the current weather, with the conditions that the user requires
const Weather = ({
    weather = ''
}) => {
    return (
        <h3 className="weather"> {weather} °C </h3>
    );
}

export default Weather;