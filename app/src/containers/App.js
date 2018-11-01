import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '../components/Select/Select';
import '../App.css';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import Zoom from '@material-ui/core/Zoom';

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

    renderCities() {
        const selectedOptions = this.state.selectedOptions.reduce((acc, v) => {acc[v.value.toLowerCase()] = v.value; return acc}, {});
        const filteredArrayOfCities = this.props.cities.filter(city => city.cityName.toLowerCase() in selectedOptions);

        const date = new Date();
        const currentDay = date.getDay();
        const hour = date.getHours();
        const dayOfWeek = getDayOfWeek(currentDay);

        return filteredArrayOfCities.map((city, idx) => {
            const periods = city.response[0].periods;
            return (
                <Zoom in style={{transitionDelay: 150 + (idx * 100)}}>
                    <Grid justify="center" style={{display: 'flex'}} item xs={12} sm={6} md={4} lg={3}>
                        <WeatherCard
                            temperature={periods[0].avgTempC}
                            weather={periods[0].weather || periods[0].weatherPrimary}
                            timeOfDay={hour < 20 && hour > 6 ? 'day' : 'night'}
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
                    </Grid>
                </Zoom>
            );
        });
    }

    handleChange = selectedOptions => {
        this.setState({selectedOptions});
    };

    render() {
        return (
            <React.Fragment>
                {!this.props.cities.length ?
                    <CircularProgress style={{position: 'absolute', top: 'calc(50% - 50px)', left: 'calc(50% - 50px)'}} size={100} /> : (
                        <React.Fragment>
                            <Select
                                value={this.state.selectedOptions}
                                onChange={this.handleChange}
                                options={options()}
                                isMulti
                                isSearchable
                                placeholder="Start typing city name"
                                isClearable={false}
                            />
                            <Grid
                                container
                                direction="row"
                                spacing={32}
                                alignContent="space-around"
                            >
                                {this.renderCities.bind(this)()}
                            </Grid>
                        </React.Fragment>)}
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
