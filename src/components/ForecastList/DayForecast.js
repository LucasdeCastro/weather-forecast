import React from 'react';
import PropTypes from 'prop-types';
import { createURLImage } from '../../utils/url';

function DayForecast({
  min, max, date, temperature, icon, onClick, isActive,
}) {
  const [day, month] = [
    `${new Date(`${date} 00:00:00`).getDate()}`.padStart(2, '0'),
    `${1 + new Date(`${date} 00:00:00`).getMonth()}`.padStart(2, '0'),
  ];

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' ? onClick() : null)}
      className={`forecast-list-items ${isActive ? 'item-active' : ''}`}
      data-component-name="DayForecast"
    >
      <p>
        {`${day}/${month}`}
      </p>
      <img alt="" src={createURLImage(`/img/wn/${icon}@2x.png`)} />
      <h2>
        {temperature}
        º
      </h2>
      <p className="center-text">
        {`Low ${min}º | High ${max}º`}
      </p>
    </div>
  );
}

DayForecast.propTypes = {
  onClick: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default DayForecast;
