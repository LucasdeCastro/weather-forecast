import React, { useEffect } from 'react';
import useLocation from '../hooks/useLocation';
import useWeather from '../hooks/useWeather';
import WeatherCard from '../components/WeatherCard';
import ForeCastList from '../components/ForecastList';
import { createURLImage } from '../utils/url';
import UnityControls from '../components/UnityControls';
import ErrorPage from './ErrorPage';

function HomePage() {
  const [location] = useLocation();
  const {
    city,
    days,
    unity,
    error,
    byHour,
    loading,
    selectedDate,
    selectedDay,
    setUnity,
    setSelectedDay,
    setSelectedDate,
  } = useWeather(location.data);

  const currentIcon = selectedDay?.weather?.icon;

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.href = createURLImage(`/img/wn/${currentIcon}@2x.png`);
  }, [currentIcon]);

  const hourList = byHour && byHour[selectedDate]
    ? Object.entries(byHour[selectedDate])
    : [];

  if (loading) {
    return null;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <main className="weather-app">
      <UnityControls unity={unity} setUnity={setUnity} />

      {selectedDay ? (
        <WeatherCard
          city={city}
          date={selectedDate}
          temperature={selectedDay.temp}
          icon={currentIcon}
          description={selectedDay.weather.description}
          details={{
            Sunrise: city.sunrise,
            Humidity: `${selectedDay.humidity}%`,
            'Wind Speed': `${selectedDay.wind.speed}km/h`,
            Sunset: city.sunset,
            'Real feel': `${selectedDay.feelsLike}º`,
            Pressure: `${selectedDay.pressure}mbar`,
          }}
        />
      ) : null}

      <h2>
        Forecast for the day
      </h2>
      <section className="forecast-list-hour">
        {hourList.map(([date, day]) => (
          <ForeCastList
            key={`${date}-${day}`}
            type="hour-list"
            date={date}
            temperature={day.temp}
            icon={day.weather.icon}
          />
        ))}
      </section>

      <h2>Next 5 days</h2>
      <section className="forecast-list-day">
        {days && days.map(([date, day], index) => (
          <ForeCastList
            key={`${date}-${day}`}
            type="day-list"
            index={index}
            date={date}
            temperature={day.temp}
            min={day.min}
            max={day.max}
            isActive={date === selectedDate}
            icon={day.weather.icon}
            onClick={() => {
              setSelectedDate(date);
              setSelectedDay(day);
              document.body.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ))}
      </section>
    </main>
  );
}

export default HomePage;
