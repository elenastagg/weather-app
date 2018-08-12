import React from 'react';
import PropTypes from 'prop-types';
import '../styles/forecast-details.scss';
import moment from 'moment';


const ForecastDetails = props => (
  <div className="forecast-details">
    <div className="forecast-details__date">{moment(props.forecast.date).format('ddd Do MMM')}</div>
    <div className="forecast-details__temperature-max"><span className="prop-title"> Max Temperature: </span>{props.forecast.temperature.max}&#176;c</div>
    <div className="forecast-details__temperature-min"><span className="prop-title">Min Temperature: </span>{props.forecast.temperature.min}&#176;c</div>
    <div className="forecast-details__humidity"><span className="prop-title">Humidity: </span>{props.forecast.humidity}&#37;</div>
    <div className="forecast-details__wind-direction"><span className="prop-title">Wind Direction: </span>{props.forecast.wind.direction}</div>
    <div className="forecast-details__wind-speed"><span className="prop-title">Wind Speed: </span>{props.forecast.wind.speed}mph</div>


  </div>
);

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    humidity: PropTypes.number,
  }).isRequired,
};

export default ForecastDetails;
