import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import WeatherCard from '../components/WeatherCard/WeatherCard';

import { connect } from 'react-redux';
import { fetchCities } from '../action';
import { cities, dayMap, monthMap } from '../const';

function getDayOfWeek(day){
    let dayOfWeek = day;
    return () => {
        dayOfWeek++;
        return day === 7 ? 0 : dayOfWeek;
    };
}

class App extends Component {
    componentDidMount() {
        this.props.fetchCities();
    }

    createChunks() {
        let i,j,tempArray,chunk = 4;
        let res = [];
        for (i = 0,j = this.props.cities.length; i < j; i += chunk) {
            tempArray = this.props.cities.slice(i,i + chunk);
            res.push(
                <Grid
                    container
                    item
                    xs={12}
                    justify="space-around"
                >
                    {this.renderCities(tempArray, cities.slice(i, i + chunk))}
                </Grid>
            );
        }
        return res;
    }

    renderCities(chunk, cityNames) {
        const date = new Date();
        const currentDay = date.getDay();
        const hour = date.getHours();
        return chunk.map((city, index) => {
            const dayOfWeek = getDayOfWeek(currentDay - 1);

            const periods = city.response[0].periods;
            return (
                <Grid justify="center" style={{ display: 'flex' }} item xs={3}>
                    <WeatherCard
                        temperature={periods[0].avgTempC}
                        weather={periods[0].weather || periods[0].weatherPrimary}
                        timeOfDay={hour < 20 && hour > 6 ? 'day' : 'night' }
                        city={cityNames[index]}
                        date={date.getDate()}
                        month={monthMap[date.getMonth()]}
                        day={dayMap[currentDay].toUpperCase()}
                        forecast={periods.map(per => ({
                            day: dayMap[dayOfWeek()],
                            temperature: per.maxTempC,
                            nightTemperature: per.minTempC,
                            weather: per.weather,
                        }))}
                    />
                </Grid>);
        });
    }
  render() {
    return (
        <Grid
            container
            direction="row"
            spacing={32}
            alignContent="space-around"
        >
            {this.createChunks.bind(this)()}
        </Grid>
    );
  }
}

const mapStateToProps = state => ({
    cities: state.result.cities,
});

const mapDispatchToProps = dispatch => ({
    fetchCities: () => dispatch(fetchCities()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
