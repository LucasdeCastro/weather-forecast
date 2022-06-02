import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import WeatherCard from './index';

const MOCK = {
  city: { name: 'São Paulo', country: 'Brazil' },
  date: '2022-05-26',
  temperature: 12,
  max: 20,
  min: 10,
  humidity: 10,
  feelsLike: 11,
  pressure: 1000,
  weather: {
    description: 'Clear',
  },
  wind: {
    speed: 10,
  },
  icon: '01d',
};

const DETAILS = {
  High: `${MOCK.max}º`,
  Humidity: `${MOCK.humidity}%`,
  'Real feel': `${MOCK.feelsLike}º`,
  Low: `${MOCK.min}º`,
  'Wind Speed': `${MOCK.wind.speed}km/h`,
  Pressure: `${MOCK.pressure}mbar`,
};

describe('WeatherCard', () => {
  it('render', () => {
    render(<WeatherCard
      city={MOCK.city}
      date={MOCK.date}
      temperature={MOCK.temperature}
      icon={MOCK.icon}
      description={MOCK.weather.description}
      details={DETAILS}
    />);

    expect(screen.getByText(DETAILS.High)).toBeInTheDocument();
    expect(screen.getByText(DETAILS.Humidity)).toBeInTheDocument();
    expect(screen.getByText(DETAILS['Real feel'])).toBeInTheDocument();
    expect(screen.getByText(DETAILS['Wind Speed'])).toBeInTheDocument();
    expect(screen.getByText(DETAILS.Pressure)).toBeInTheDocument();
  });
});
