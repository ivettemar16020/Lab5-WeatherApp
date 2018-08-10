import React, {Fragment} from 'react';
import './weatherapp.css';

import Information from '../cInformation/information';
import currentWeather from '../cWeather/currentWeather';

class WeatherApp extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            city: '',
            icon: '',
            temp_f: '',
            temp_c: '',
            date: '',
        }
    }

    _City = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.split(' ')[0]}&appid=e5c3dd7a3f8e4e834f3607fddeefe3f2`)
            .then( weather => weather.json())
            .then( responseJSON => {
                const data = responseJSON.list[0];
                this.setState({
                    icon: data.weather[0].main, //Get the value and set as state
                    temp_f: data.main.temp, //Get the value and set as state
                    temp_c: data.main.temp - 273.15,
                })
            });
    }

    componentWillMount() {
        fetch('https://ipinfo.io/json')
            .then( response => response.json())
            .then (
                search => {
                    this.setState({
                        city: search.city,
                    });

                    this._City(search.city);//Search the weather of the city
                }
            )
    }

    render (){
        const {city, temp_c} = this.state
        console.log(this.state)
        return (
            <Fragment>
                <Information city={city}/>
                <h3>{Number(temp_c).toFixed(2)} </h3>
                <currentWeather weather={temp_c}/>
            </Fragment>
        );
    }
}

export default WeatherApp;