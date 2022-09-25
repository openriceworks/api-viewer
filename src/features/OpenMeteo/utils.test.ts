import { OpenMeteoParams } from "./types"
import { createOpenMeteoUrl } from "./utils"

describe("createOpenMeteoUrl", () => {
  it("optionalParameter", () => {
    const params: OpenMeteoParams = {
      latitude: 35.6785,
      longitude: 139.6823,
      hourly: 'temperature_2m'
    }
    expect(createOpenMeteoUrl(params)).toBe('https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m')
  })
  
  it("toSnakeCase", () => {
    const params: OpenMeteoParams = {
      latitude: 35.6785,
      longitude: 139.6823,
      currentWeather: true
    }
    expect(createOpenMeteoUrl(params)).toBe('https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&current_weather=true')
  })
})