import React from "react"
import cityList from "../api/getCityList"
import { City } from "../types"

export const CitySelect = (props:{onChange: (city: City|null) => void}) => {

  const toCity = (e:React.ChangeEvent<HTMLSelectElement>) =>
    cityList.find(city => city.cityName === e.target.value) ?? null

  return (
    <select
      className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      onChange={(e) => props.onChange(toCity(e))}
      >
      <option selected>Choose a city</option>
      {
        cityList.map(city => (
          <option value={city.cityName}>
            {city.cityName}
          </option>
        ))
      }
    </select>
  )
}

export default CitySelect