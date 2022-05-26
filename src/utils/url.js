import { OPEN_WEATHER_URL, OPEN_WEATHER_URL_IMAGE, APP_KEY } from '../constants';

export const createURL = (path, baseUrl = OPEN_WEATHER_URL) => {
  const url = new URL(path, baseUrl);
  url.searchParams.set('appid', APP_KEY);
  return url;
};

export const createURLImage = (path) => new URL(path, OPEN_WEATHER_URL_IMAGE);

export default { createURL };
