import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <div className="forecast-summary">
    <div className="forecast-summary__date">{moment(props.date).format('ddd Do MMM')}</div>
    <div className="forecast-summary__icon">
      <WeatherIcon name="owm" iconId={props.icon} flip="horizontal" rotate="90" />
    </div>
    <div className="forecast-summary__temperature">{props.temperature}&#176;c</div>
    <div className="forecast-summary__description">{props.description}</div>
    <div><button className="details-button" onClick={() => props.onSelect(props.date)}>More details</button></div>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

export default ForecastSummary;
