import { OpenMeteoParams } from "./types";
import {snakeCase} from "lodash";

export const createOpenMeteoUrl = (params: OpenMeteoParams) => {
  const prefix = "https://api.open-meteo.com/v1/forecast"
  
  const query = Object.entries(params).reduce((ret, [key,value]) => {
    ret.append(snakeCase(key), typeof value === 'string' ? value : value.toString())
    return ret
  }, new URLSearchParams())
  return `${prefix}?${query}` 
}

// WMO 4501
export const getWeatherCodeLabel = (code: number): string => {
  switch (code) {
    case 0:	return "Clear(No cloud at any level)"
    case 1:	return "Partly cloudy(Scattered or broken)"
    case 2:	return "Continuous layer(s) of blowing snow"
    case 3:	return "Sandstorm, duststorm, or blowing snow"
    case 4:	return "Fog, thick dust or haze"
    case 5:	return "Drizzle"
    case 6:	return "Rain"
    case 7:	return "Snow, or rain and snow mixed"
    case 8:	return "Shower(s)"
    case 9:	return "Thunderstorm(s)"
  }
  return ""
}