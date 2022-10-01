import { useRef, useState } from "react";
import Button from "../../../components/Elements/Button"
import Dialog, { DialogRef } from "../../../components/Elements/Dialog";
import IconButton from "../../../components/Elements/IconButton";
import { City } from "../types";
import CitySelect from "./CitySelect";

const CitySelectDialogButton = (props:{onSelectCity: (city:City) => void}) => {

  const [city, setCity] = useState<City | null>(null)

  const onAddCity = (city:City|null) => {
    if(city) {
      props.onSelectCity(city)
      closeDialog()
      setCity(null)
    } else {
      alert("must select city")
    }
  }

  const ref  = useRef<DialogRef>(null);
  const closeDialog = () => {
    if(ref.current) {
      ref.current.closeDialog()
    }
  }
  const showDialog = () => {
    if(ref.current) {
      ref.current.showDialog()
    }
  }

  return (
    <div>
      <IconButton shadow="shadow-xl" shape="rounded-full" onClick={showDialog}>
        {/* https://heroicons.dev/ */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
          </path>
        </svg>
      </IconButton>
      <Dialog title="choose city" ref={ref}>
        <div className="h-5/6">
          <CitySelect onChange={c=> setCity(c)}/>
        </div>
        <div className="h-1/6 flex justify-end">
          <span className="p-1">
            <Button onClick={() => onAddCity(city)}>add city</Button>
          </span>
        </div>
      </Dialog>
    </div>
  )
}

export default CitySelectDialogButton