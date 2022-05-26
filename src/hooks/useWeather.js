import { useState, useEffect } from 'react';
import getWeatherByLocation from '../services/weather';
import { mapWeatherToView, mapCityToView } from '../utils/mappers/weather';

const useWeather = (location) => {
  const [unity, setUnity] = useState('metric');
  const [error, setError] = useState();
  const [state, setState] = useState({ loading: true, byHour: {}, byDay: {} });
  const [selectedDay, setSelectedDay] = useState();
  const [selectedDate, setSelectedDate] = useState();

  useEffect(() => {
    const getWeather = async (latitude, longitude) => {
      const data = await getWeatherByLocation({
        latitude,
        longitude,
      }, unity);

      if (data.error) {
        setError(data.error);
        return;
      }

      if (data) {
        const mappedValues = mapWeatherToView(data.list);
        const days = Object.entries(mappedValues.byDay)
          .sort((a, b) => new Date(a[0]) - new Date(b[0]));
        const city = mapCityToView(data.city);

        setSelectedDate(days[0][0]);
        setSelectedDay(days[0][1]);
        setState({
          ...mappedValues,
          loading: false,
          city,
          days,
        });
      }
    };

    getWeather(location.latitude, location.longitude);
  }, [location.latitude, location.longitude, unity]);

  return {
    ...state,
    selectedDay,
    selectedDate,
    setSelectedDate,
    setSelectedDay,
    unity,
    setUnity,
    error,
  };
};

export default useWeather;
