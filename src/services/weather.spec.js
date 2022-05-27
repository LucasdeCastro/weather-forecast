import getWeatherByLocation from './weather';

global.fetch = jest.fn();

describe('weather', () => {
  it('getWeatherByLocation', async () => {
    const mock = Math.random() * 1000;
    global.fetch.mockResolvedValue({ json: () => Promise.resolve(mock) });
    const result = await getWeatherByLocation({ latitude: 1, longitude: 2 }, 'metric');
    const strURL = global.fetch.mock.calls[0][0].toString();

    expect(strURL).toBe(
      'https://api.openweathermap.org/data/2.5/forecast?appid=bbb56605589c1ebdf789be6e43887b8f&lat=1&lon=2&units=metric',
    );

    expect(result).toBe(mock);
    expect(await getWeatherByLocation()).toBeNull();
  });
});
