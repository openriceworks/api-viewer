import { useState } from "react"
import CitySelectDialogButton from "../../features/City/components/CitySelectDialogButton"
import { City } from "../../features/City/types"
import OpenMeteoCard from "../../features/OpenMeteo/components/OpenMeteoCard"
import { OpenMeteoParams } from "../../features/OpenMeteo/types"
import FlexWrapLayout from "./FlexWrapLayout"

const MainLayout = () => {
    const [paramsList, setParamsList] = useState<(OpenMeteoParams & City)[]>([])

    return (
      <div className="w-screen h-screen">
        <div className='w-full h-1/12 shadow'>
          <h1 className='font-bold'>API-viewer</h1>
        </div>
        <div className='w-full h-11/12 overflow-auto bg-slate-100'>
          <FlexWrapLayout>
            {
              paramsList.map(params =>
                (
                  <div className="w-96" key={params.cityName}>
                    <OpenMeteoCard data={params}/>
                  </div>
                )
              )
            }
          </FlexWrapLayout>
        </div>
        <div className='fixed z-90 bottom-10 right-8'>
          <CitySelectDialogButton onSelectCity={
            (city) => setParamsList(state => state.concat({
              ...city,
              currentWeather: true
            }))
          }/>
        </div>
      </div>
    )
}

export default MainLayout