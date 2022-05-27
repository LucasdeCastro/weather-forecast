import {
  mapItemByHour, mapItemByDay, mapWeatherToView, mapCityToView,
} from './weather';

describe('mappers - weather', () => {
  it('mapItemByHour', () => {
    expect(mapItemByHour({ a: 10, weather: ['weather'], main: { temp: 20.5 } })).toMatchObject({
      a: 10,
      main: {
        temp: 20.5,
      },
      temp: 20,
      weather: 'weather',
    });
  });

  it('mapItemByDay', () => {
    const item = {
      main: {
        temp: 10,
        temp_min: 5,
        temp_max: 15,
        humidity: 10,
        feels_like: 20,
        pressure: 1000,
      },
      weather: ['b'],
      wind: 10,
    };
    const current = { main: { ...item.main, temp_min: 4 }, weather: ['a'] };
    expect(mapItemByDay(item, current)).toMatchObject(
      {
        feelsLike: 20,
        humidity: 10,
        max: 15,
        min: 5,
        pressure: 1000,
        temp: 10,
        weather: [
          'a',
        ],
        wind: 10,
      },
    );
  });

  it('mapWeatherToView', () => {
    const item = {
      main: {
        temp: 10,
        temp_min: 5,
        temp_max: 15,
        humidity: 10,
        feels_like: 20,
        pressure: 1000,
      },
      weather: ['b'],
      wind: 10,
      dt_txt: '2022-05-26 10:00:10',
    };

    const data = mapWeatherToView([
      { ...item },
      { ...item },
      { ...item },
    ]);

    expect(data).toMatchObject({});
  });

  it('mapCityToView', () => {
    const mock = {
      a: 10,
      sunrise: 1653615771,
      sunset: 1653615771,
    };

    expect(
      mapCityToView(mock),
    ).toMatchObject(
      { a: 10, sunrise: '10:4 am', sunset: '10:4 pm' },
    );
  });
});
