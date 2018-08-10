import React, {Fragment} from 'react';
//import './currentWeather.css';

const Weather = ({
    weather = ''
}) => {
    return (
        <h3 className="weather"> {weather} </h3>
    );
}

export default Weather;