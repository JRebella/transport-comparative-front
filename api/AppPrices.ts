import { ROUTES } from "../config/routes";

export type AppPrice = {
  appName: string;
  price: {
    highEstimate: number;
    lowEstimate: number;
  };
  timeEstimationInMinutes: number;
};

export type Route = {
  from: string;
  to: string;
};

export type Geolocation = {
  latitude: number;
  longitude: number;
  locationQuery: string; // The original user entered query
};

export type GeolocationRoute = {
  from: Geolocation;
  to: Geolocation;
};

export const getPricesForRoute = (route: GeolocationRoute) => {
  return fetch(ROUTES.GET_ROUTE_PRICES(route)).then((r) => {
    if (r.status === 200) {
      return r.json();
    } else {
      throw `Failed request with status ${r.status}`;
    }
  });
};

export const queryGeolocation = (locationQuery: string) => {
  return fetch(ROUTES.QUERY_GEOLOCATION(locationQuery)).then((r) => {
    if (r.status === 200) {
      return r.json();
    } else {
      throw `Failed request with status ${r.status}`;
    }
  });
};
