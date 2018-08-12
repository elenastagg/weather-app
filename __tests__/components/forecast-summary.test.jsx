import React from 'react';
import { shallow } from 'enzyme';
import ForecastSummary from '../../src/components/forecast-summary';
import WeatherIcon from 'react-icons-weather';

let wrapper;
beforeEach(() => {
  wrapper = shallow((
    <ForecastSummary
      date={1525392000000}
      temperature={2}
      description="mockDescription"
      icon="mockIcon"
    />
  ));
});

it('renders the date', () => {
  expect(wrapper.find('.forecast-summary__date').text()).toEqual('Fri 4th May');
});

it('renders the temperature', () => {
  expect(wrapper.find('.forecast-summary__temperature').text()).toEqual('2°c');
});

it('renders the description', () => {
  expect(wrapper.find('.forecast-summary__description').text()).toEqual('mockDescription');
});

it('renders the icon', () => {
  expect(wrapper.find(WeatherIcon).prop('iconId')).toEqual('mockIcon');
});
