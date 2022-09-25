import { fromSnakeToCamel } from "../../../utils/formatter"
import { OpenMeteoParams, OpenMeteoResponse, OpenMeteoRowResponse } from "../types"
import { createOpenMeteoUrl } from "../utils"

const getForecast = async (params: OpenMeteoParams): Promise<OpenMeteoResponse | null> =>  {
  const url = createOpenMeteoUrl(params)
  const res = await fetch(url).catch((e) => {
    console.error(e)
  })
  if(res) {
    return fromSnakeToCamel(await res.json() as OpenMeteoRowResponse);
  }
  return null
}

export default getForecast