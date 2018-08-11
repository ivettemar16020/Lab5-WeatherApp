import React from 'react';
import './currentweather.css'; 

const Weather = ({
    weather = ''
}) => {
    return (
        <h3 className="weather"> {weather} °C </h3>
    );
}

export default Weather;