import getForecast from "../api/getForecast"
import { OpenMeteoParams, OpenMeteoResponse } from "../types"
import { getWeatherCodeLabel } from "../utils"

const showData  = (data: OpenMeteoResponse) => (
  <div>
    <div>
      {
        data.currentWeather != null ?
          getWeatherCodeLabel(data.currentWeather.weathercode)
          : ""
      }
    </div>
  </div>
)

let data: OpenMeteoResponse | null | undefined = undefined

const openMeteoCardContent = (props: {params: OpenMeteoParams}) => {
  if(data === undefined) {
    throw getForecast(props.params).then(res => data = res)
  } else {
    return (
      data != null ? showData(data) : <div></div>
    )
  }
}

export default openMeteoCardContent