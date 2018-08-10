import React, {Fragment} from 'react';
import './information.css'; 

const infoCity = ( {
    city = 'Guatemala City' //By default
} ) => {
    return (
        <h3 className="city"> {city} </h3>
    );
}

export default infoCity;