import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    lang: 'es',
    units: 'metric',
    appid: process.env.EXPO_PUBLIC_WEATHER_APP_ID,
  }
});