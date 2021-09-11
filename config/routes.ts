import { GeolocationRoute } from "../api/AppPrices";

const BASE_URL = "api";

export const ROUTES = {
  GET_ROUTE_PRICES: (route: GeolocationRoute) =>
    `${BASE_URL}/precios/GetPreciosRuta/${route.from.latitude}/${route.from.longitude}/${route.to.latitude}/${route.to.longitude}`,
  QUERY_GEOLOCATION: (locationQuery: string) => `${BASE_URL}/location?location=${locationQuery}`,
};
