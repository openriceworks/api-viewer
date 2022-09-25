import getForecast from "../api/getForecast"
import { OpenMeteoParams } from "../types"
import { getWeatherCodeLabel } from "../utils"
import { useQuery } from "@tanstack/react-query"
import { City } from "../../City/types"


const openMeteoCardContent = (props: { params: OpenMeteoParams & City }) => {

  const { data } = useQuery(['openMeteo', props.params.cityName], () => getForecast(props.params))

  if (data != null) {
    return (
      <div>
        <div>
          {
            data.currentWeather != null ?
              getWeatherCodeLabel(data.currentWeather.weathercode)
              : ""
          }
        </div>
        <div>
          temperature: {data.currentWeather?.temperature}℃
        </div>
        <div>
          windspeed: {data.currentWeather?.windspeed}Km/h
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default openMeteoCardContent