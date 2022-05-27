export const mapItemByHour = (item) => ({
  ...item,
  weather: item?.weather[0],
  temp: parseInt(item?.main?.temp, 10),
});

export const mapItemByDay = (item, current) => {
  const {
    main: {
      temp,
      temp_min: tempMin,
      temp_max: tempMax,
      humidity,
      feels_like: feelsLike,
      pressure,
    },
  } = item;

  return {
    pressure,
    wind: current.wind || item.wind,
    weather: current.weather || item.weather[0],
    min: parseInt(Math.min(tempMin, current.min || Infinity), 10),
    max: parseInt(Math.max(tempMax, current.max || -Infinity), 10),
    temp: parseInt(current.temp || temp, 10),
    humidity: parseInt(current.temp || humidity, 10),
    feelsLike: parseInt(feelsLike, 10),
  };
};

export const mapWeatherToView = (list) => {
  const mapped = list.reduce((result, item) => {
    const [data, time] = item.dt_txt.split(' ');
    const currentDay = result.byDay[data] || {};

    return {
      ...result,
      byHour: {
        ...result.byHour,
        [data]: {
          ...result.byHour[data],
          [time]: mapItemByHour(item),
        },
      },
      byDay: {
        ...result.byDay,
        [data]: mapItemByDay(item, currentDay),
      },
    };
  }, { byHour: {}, byDay: {} });

  return mapped;
};

export const mapCityToView = ({ sunrise, sunset, ...city }) => ({
  ...city,
  sunrise: `${new Date(sunrise * 1000).toLocaleString().substr(11, 4)} am`,
  sunset: `${new Date(sunset * 1000).toLocaleString().substr(11, 4)} pm`,
});

export default {
  mapWeatherToView,
  mapItemByDay,
  mapItemByHour,
  mapCityToView,
};
