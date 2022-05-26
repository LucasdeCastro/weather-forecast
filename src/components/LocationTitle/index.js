import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function LocationTitle({ location: { name, country }, date }) {
  return (
    <div className="location-title">
      <h1>
        {`${name}, ${country}`}
      </h1>
      <span>{date}</span>
    </div>
  );
}

LocationTitle.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default LocationTitle;
