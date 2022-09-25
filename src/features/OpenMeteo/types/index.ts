import { SnakeToCamel } from "../../../types"

type OpenMeteoHourly = "temperature_2m"

export type OpenMeteoParams = {
  latitude: number,
  longitude: number,
  hourly?: OpenMeteoHourly,
  currentWeather? : boolean
}

export type OpenMeteoRowResponse = {
  "latitude": number,
  "longitude": number,
  "generationtime_ms": number,
  "utc_offset_seconds": number,
  "timezone": "GMT",
  "timezone_abbreviation": "GMT",
  "elevation": number,
  "current_weather"?: {
      "temperature": number,
      "windspeed": number,
      "winddirection": number,
      "weathercode": 3,
      "time": string // "yyyy-mm-ddTHH:00"
  }
}

export type OpenMeteoResponse = SnakeToCamel<OpenMeteoRowResponse>