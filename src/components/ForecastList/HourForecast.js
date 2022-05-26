import React from 'react';
import PropTypes from 'prop-types';
import { createURLImage } from '../../utils/url';

function HourForecast({ date, temperature, icon }) {
  return (
    <div
      className="forecast-list-items hour-item"
      data-component-name="HourForecast"
    >
      <p>{date.split(':').splice(0, 2).join(':')}</p>
      <h2>
        {temperature}
        º
      </h2>
      <img alt="" src={createURLImage(`/img/wn/${icon}@2x.png`)} />
    </div>
  );
}

HourForecast.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default HourForecast;
