import { Suspense } from "react"
import Card from "../../../components/Elements/Card"
import { City } from "../../City/types"
import { OpenMeteoParams } from "../types"
import OpenMeteoCardContent from "./OpenMeteoCardContent"

const OpenMeteoCard = (props:{data: (OpenMeteoParams & City)}) => {
  const {data} = props
  return (
    <Card>
      <Suspense fallback={<p>Loading...</p>}>
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