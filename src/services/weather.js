import { createURL } from '../utils/url';

const getWeatherByLocation = async ({ latitude, longitude }, unity) => {
  try {
    if (latitude == null || longitude == null) { return null; }

    const url = createURL('/data/2.5/forecast');

    url.searchParams.set('lat', latitude);
    url.searchParams.set('lon', longitude);
    url.searchParams.set('units', unity);

    const response = await fetch(url);
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    return { error };
  }
};

export default getWeatherByLocation;
