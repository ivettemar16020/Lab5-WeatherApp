import React from 'react';
import './information.css'; 

//Returns the city name
const infoCity = ( {
    city = 'Canada City' //By default
} ) => {
    return (
        <h3 className="city"> {city} </h3>
    );
}

export default infoCity;