import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import '../App.css';
import WeatherCard from '../components/WeatherCard/WeatherCard';

import { connect } from 'react-redux';
import { fetchCities } from '../action';
import { cities, dayMap, monthMap } from '../const';

function getDayOfWeek(day){
    let dayOfWeek = day;
    return () => {
        let day;
        if(dayOfWeek === 7) {
            day = 0;
            dayOfWeek = 0;
        } else day = dayOfWeek;
        dayOfWeek++;
        return day;
    };
}

const options = () => cities.map(city => ({ value: city, label: city }));

class App extends Component {

    constructor() {
        super();
        this.state = {
            selectedOptions: options(),
        };
    }

    componentDidMount() {
        this.props.fetchCities();
    }

    createChunks() {
        const selectedCities = this.state.selectedOptions.map(opt => opt.label);
        const filteredArrayOfCities = this.props.cities.filter(city => selectedCities.includes(city.cityName));
        let i,j,tempArray,chunk = 4;
        let res = [];
        for (i = 0,j = filteredArrayOfCities.length; i < j; i += chunk) {
            tempArray = filteredArrayOfCities.slice(i,i + chunk);
            res.push(
                this.renderCities(tempArray, cities.slice(i, i + chunk))
            );
        }
        return res;
    }

    renderCities(chunk) {
        const date = new Date();
        const currentDay = date.getDay();
        const hour = date.getHours();
        return chunk.map(city => {
            const dayOfWeek = getDayOfWeek(currentDay);
            const periods = city.response[0].periods;
            return (
                <Grid justify="center" style={{ display: 'flex' }} item xs={12} sm={6} md={4} lg={3}>
                    <WeatherCard
                        temperature={periods[0].avgTempC}
                        weather={periods[0].weather || periods[0].weatherPrimary}
                        timeOfDay={hour < 20 && hour > 6 ? 'day' : 'night' }
                        city={city.cityName}
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

    handleChange = selectedOptions => {
        this.setState({selectedOptions});
    };

    render() {
        return (
            <React.Fragment>
                <Select
                    value={this.state.selectedOptions}
                    onChange={this.handleChange}
                    options={options()}
                    isMulti
                    isSearchable
                    placeholder="Start typing city name"
                />
                <Grid
                    container
                    direction="row"
                    spacing={32}
                    alignContent="space-around"
                >
                    {this.createChunks.bind(this)()}
                </Grid>
            </React.Fragment>
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
