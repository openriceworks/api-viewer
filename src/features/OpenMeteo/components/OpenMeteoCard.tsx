import { Suspense } from "react"
import Card from "../../../components/Elements/Card"
import { City } from "../../City/types"
import { OpenMeteoParams } from "../types"
import OpenMeteoCardContent from "./OpenMeteoCardContent"

const OpenMeteoCard = (props:{data: (OpenMeteoParams & City)}) => {
  const {data} = props
  return (
    <Card>
      <Suspense fallback={
        <div className="w-48 h-48">
          <div className="animate-spin h-48 w-48 border-4 border-blue-500 rounded-full border-t-transparent"></div>
        </div>
      }>
        <div className="relative">
          <img src={data.photoSrc}/>
          <div className="absolute bottom-0 right-0">
            <h2 className="font-bold text-2xl text-white">{data.cityName}</h2>
          </div>
        </div>
        <OpenMeteoCardContent params={data}/>
      </Suspense>
    </Card>
  )
}

export default OpenMeteoCard