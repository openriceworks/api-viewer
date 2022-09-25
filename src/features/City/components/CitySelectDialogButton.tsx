import { useCallback, useRef, useState } from "react";
import Button from "../../../components/Elements/Button"
import IconButton from "../../../components/Elements/IconButton";
import { City } from "../types";
import CitySelect from "./CitySelect";

const CitySelectDialogButton = (props:{onSelectCity: (city:City) => void}) => {

  // https://numb86-tech.hatenablog.com/entry/2020/02/29/183517
  const ref: React.MutableRefObject<HTMLDialogElement | null> = useRef(null);

  const showModal = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, []);

  const closeModal = useCallback(() => {
    if (ref.current) {
      ref.current.close();
    }
  }, []);

  const [city, setCity] = useState<City | null>(null)

  const onAddCity = (city:City|null) => {
    if(city) {
      props.onSelectCity(city)
      closeModal()
      setCity(null)
    } else {
      alert("must select city")
    }
  }

  return (
    <div>
      <IconButton shadow="shadow-xl" shape="rounded-full" onClick={showModal}>
        {/* https://heroicons.dev/ */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6">
          </path>
        </svg>
      </IconButton>
      {/* TODO create dialog component */}
      <dialog ref={ref} className="rounded bg-white w-1/2 h-1/2 flex-row">
        <div className="h-1/6 relative">
          <h2 className="font-bold text-2xl" >choose city</h2>
          <div className="absolute top-0 right-0">
            <IconButton color="red" shape="rounded" onClick={closeModal}>
              {/* https://heroicons.dev/ */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                </path>
              </svg>
            </IconButton>
          </div>

        </div>
        <div className="h-4/6">
          <CitySelect onChange={c=> setCity(c)}/>
        </div>
        <div className="h-1/6 flex justify-end">
          <span className="p-1">
            <Button onClick={() => onAddCity(city)}>add city</Button>
          </span>
        </div>
      </dialog>
    </div>
  )
}

export default CitySelectDialogButton