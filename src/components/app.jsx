import React from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import SearchForm from './SearchForm';
import axios from 'axios';
import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: '',
        country: '',
      },
      errorMessage: '',
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
    this.handleCitySelect = this.handleCitySelect.bind(this);
  }

  componentDidMount() {
    axios.get('https://mcr-codes-weather.herokuapp.com/forecast').then(response => {
      this.setState({
        forecasts: response.data.forecasts,
        location: response.data.location,
      });
    });
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }

  handleCitySelect(city) {
    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${city}`)
      .then((response) => {
        this.setState({
          forecasts: response.data.forecasts,
          location: response.data.location,
          errorMessage: '',
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.status === 404 ? 'Location not found' : 'Something went wrong',
        });
      });
  }

  render() {
    const selectedForecast =
    this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);

    return (
      <div className="forecast">
        {
          this.state.errorMessage ?
            <h1>{this.state.errorMessage}</h1> :
            (
              <LocationDetails
                city={this.state.location.city}
                country={this.state.location.country}
              />
            )
        }
        <SearchForm
          onSearch={this.handleCitySelect}
        />

        <ForecastSummaries
          forecasts={this.state.forecasts}
          onForecastSelect={this.handleForecastSelect}
        />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }

      </div>
    );
  }
}

export default App;
