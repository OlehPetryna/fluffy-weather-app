import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';

class App extends Component {
  render() {
    return (
        <WeatherCard weather="storm" timeOfDay="day" city="Kyiv" date="25" month="MAY" day="Wednesday" forecast={[{
            day: 'Thursday',
            temperature: 15,
            nightTemperature: 5,
            weather: 'clear',
        }, {
            day: 'Wednesday',
            temperature: 25,
            nightTemperature: -1,
            weather: 'rain',
        },{
            day: 'Tuesday',
            temperature: 15,
            nightTemperature: 5,
            weather: 'snow',
        }, {
            day: 'Thursday',
            temperature: 15,
            nightTemperature: 5,
            weather: 'clear',
        }, {
            day: 'Thursday',
            temperature: 15,
            nightTemperature: 5,
            weather: 'clear',
        }, {
            day: 'Thursday',
            temperature: 15,
            nightTemperature: 5,
            weather: 'clear',
        }, {
            day: 'Thursday',
            temperature: 15,
            nightTemperature: 5,
            weather: 'clear',
        }]}/>
    );
  }
}

export default App;
