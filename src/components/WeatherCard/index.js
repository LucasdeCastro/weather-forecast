import React from 'react';
import PropTypes from 'prop-types';
import LocationTitle from '../LocationTitle';
import './style.css';
import { createURLImage } from '../../utils/url';

function WeatherCard({
  temperature,
  city,
  date,
  description,
  icon,
  details,
}) {
  const formattedDate = new Date(`${date} 00:00:00`).toDateString();
  return (
    <section className="weather-card">
      <LocationTitle location={city} date={formattedDate} />

      <div className="weather-card-info">
        <div className="card-info-resume">
          <div className="card-image">
            <img alt={description} src={createURLImage(`/img/wn/${icon}@2x.png`)} />
            <span>{description}</span>
          </div>

          <h2 className="temperature">
            {temperature}
            º
          </h2>
        </div>

        <div className="card-info-detail">
          {Object.entries(details).map(([title, value]) => (
            <div key={`${title}-${value}`}>
              <p>{title}</p>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

WeatherCard.propTypes = {
  temperature: PropTypes.number.isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  details: PropTypes.object.isRequired,
};

export default WeatherCard;
