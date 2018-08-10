import React, {Fragment} from 'react';
import './weatherapp.css';

import Information from '../cInformation/information';
import CurrentWeather from '../cWeather/currentWeather';

class WeatherApp extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            city: '',
            weather: '',
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
                    weather: data.weather[0].main, //Get the value and set as state
                    temp_f: data.main.temp, //Get the value and set as state
                    temp_c: data.main.temp - 273.15,
                })
            });
    }

    _GetIcon = () => {
        if (this.state.weather === 'Rain'){
            this.setState({
                icon: "http://icon-park.com/imagefiles/simple_weather_icons2_rain.png",
            })
            
            if (this.state.weather === 'Sunny'){
                this.setState({
                    icon: "http://icon-park.com/imagefiles/simple_weather_icons_sunny.png",
                })
            }
        }
    }

    componentWillMount() {
        fetch('https://ipinfo.io/json')
            .then( response => response.json())
            .then (
                search => {
                    this.setState({
                        city: search.city,
                    });

                    this._City(this.state.city);//Search the weather of the city
                }
            )
    }

    render (){
        const {city, temp_c, icon} = this.state
        console.log(this.state);
        console.log(icon);
        return (
            <Fragment>
                <Information city={city}/>
                <img src={icon}/>
                <CurrentWeather weather={Number(temp_c).toFixed(2)}/>
                <button onClick={this._GetIcon.bind(this)}>¡GO!</button>
            </Fragment>
        );
    }
}

export default WeatherApp;