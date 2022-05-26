/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import HourForecast from './HourForecast';
import DayForecast from './DayForecast';

function ForeCastList({ type, ...props }) {
  switch (type) {
    case 'hour-list':
      return <HourForecast {...props} />;
    case 'day-list':
      return <DayForecast {...props} />;
    default:
      return <DayForecast {...props} />;
  }
}

ForeCastList.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ForeCastList;
