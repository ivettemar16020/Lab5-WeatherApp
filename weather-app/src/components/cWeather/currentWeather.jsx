import React from 'react';
//import './currentWeather.css';

const Weather = ({
    weather = ''
}) => {
    return (
        <h3 className="weather"> {weather} °C </h3>
    );
}

export default Weather;