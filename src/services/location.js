import { createURL } from '../utils/url';

const getQuery = () => {
  const url = window.location.search.replace('?', '');

  if (url === '') return null;

  const [, query] = url
    .split('&')
    .map((e) => e.split('='))
    .find(([e]) => e === 'q');

  return query;
};

class Location {
  constructor() {
    this.location = null;
  }

  async getLocationFromAPI() {
    if (!this.query) { return null; }
    try {
      const url = createURL('/geo/1.0/direct');
      url.searchParams.set('limit', 1);
      url.searchParams.set('q', decodeURI(this.query));
      const response = await fetch(url);
      const data = await response.json();

      if (!data || data.length === 0) return null;

      return {
        coords: {
          latitude: data[0].lat,
          longitude: data[0].lon,
        },
      };
    } catch (err) {
      return null;
    }
  }

  async getLocation() {
    if (this.location) {
      return this.location;
    }

    if (this.query !== getQuery()) {
      this.query = getQuery();
      const locationFromAPI = await this.getLocationFromAPI();
      if (locationFromAPI) {
        this.location = locationFromAPI;
        return locationFromAPI;
      }
    }

    this.location = {
      coords: {
        latitude: 49.2608724,
        longitude: -123.113952,
      },
    };

    return this.location;
  }
}

const location = new Location();

export default location;
