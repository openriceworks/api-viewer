import { Suspense, useState } from "react"
import OpenMeteoCardContent from "../../features/OpenMeteo/components/OpenMeteoCardContent"
import { OpenMeteoParams } from "../../features/OpenMeteo/types"
import Button from "../Elements/Button"
import Card from "../Elements/Card"
import FlexWrapLayout from "./FlexWrapLayout"

const MainLayout = () => {
    const [paramsList, setParamsList] = useState<OpenMeteoParams[]>([])
    const getCardList = (paramsList: OpenMeteoParams[]) => 
      paramsList.map(params => (
        <div className="w-96">
          <Card>
            <Suspense fallback={<p>Loading...</p>}>
              <OpenMeteoCardContent params={params}/>
            </Suspense>
          </Card>
        </div>
      ) )

    return (
      <div className="w-screen h-screen">
        <div className='w-full h-1/12 shadow'>
          <h1 className='font-bold'>API-viewer</h1>
        </div>
        <div className='w-full h-11/12 overflow-auto bg-slate-100'>
          <FlexWrapLayout>
            {
              getCardList(paramsList)
            }
          </FlexWrapLayout>
        </div>
        <div className='fixed z-90 bottom-10 right-8'>
          <Button onClick={() => setParamsList(state => state.concat({
            latitude: 35.6785,
            longitude: 139.6823,
            currentWeather: true
            }))}>
            add card
          </Button>
        </div>
      </div>
    )
}

export default MainLayout