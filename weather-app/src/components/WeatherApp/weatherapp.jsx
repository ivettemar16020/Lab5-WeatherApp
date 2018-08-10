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
            temp: '',
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
                    temp: data.main.temp, //Get the value and set as state
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
        const {city, temp} = this.state
        console.log(this.state)
        return (
            <Fragment>
                <h1 className="App">Weather App</h1>
                <Information city={city}/>
                <h3>{Number(temp).toFixed(2)} </h3>
                <currentWeather weather={temp}/>
            </Fragment>
        );
    }
}

export default WeatherApp;