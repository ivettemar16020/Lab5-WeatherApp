import React, {Fragment} from 'react';
import './weatherapp.css';

import Information from '../cInformation/information';
import CurrentWeather from '../cWeather/currentWeather';

class WeatherApp extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            inputValue: 'Guatemala City',
            dateValue: '',
            city: '',
            weather: '',
            icon: '',
            temp_f: '',
            temp_c: '',
            date: '',
        }
    }

    _City = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e5c3dd7a3f8e4e834f3607fddeefe3f2`)
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
        }
            
        if (this.state.weather === 'Sunny'){
            this.setState({
                icon: "http://icon-park.com/imagefiles/simple_weather_icons_sunny.png",
            })
        }

        if (this.state.weather === 'Clouds'){
            this.setState({
                icon: "https://cdn1.iconfinder.com/data/icons/weather-icons-6/512/clouds-512.png",
            })
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
        const {city, temp_c, icon, weather, inputValue, dateValue} = this.state
        console.log(this.state);
        console.log(icon);
        return (
            <Fragment>
                <Information city={city}/>
                <img src={icon} alt=''/>
                <h4>{weather}</h4>
                <CurrentWeather weather={Number(temp_c).toFixed(2)}/>
                <div class="container">
                    <input 
                      type="text"
                      value={inputValue}
                      onChange={
                        e => this.setState({
                          inputValue: e.target.value, 
                        })
                      }
                    />
                    <input
                      class="inputfield" 
                      type="date"
                      value={dateValue}
                      onChange={
                        e => this.setState({
                            dateValue: e.target.value, 
                        })
                      }
                    />
                    <img class="calendar-icon" src="https://lh3.ggpht.com/oGR9I1X9No3SfFEXrq655tETtVVzI3jIphhmEVPGPEVuM5gfwh8lOGWHQFf6gjSTvw=w300" alt='' />
                    <button onClick={this._GetIcon.bind(this)}>¡GO!</button>
                </div>
            </Fragment>
        );
    }
}

export default WeatherApp;