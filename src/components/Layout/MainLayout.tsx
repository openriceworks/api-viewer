import { useState } from "react"
import Button from "../Elements/Button"
import FlexWrapLayout from "./FlexWrapLayout"

const MainLayout = () => {
    const [count, setCount] = useState(5)

    return (
      <div className="w-screen h-screen">
        <div className='w-full h-1/12 shadow'>
          <h1 className='font-bold'>API-viewer</h1>
        </div>
        <div className='w-full h-11/12 overflow-auto bg-slate-100'>
          <FlexWrapLayout count={count}/>
        </div>
        <div className='fixed z-90 bottom-10 right-8'>
          <Button onClick={() => setCount(state => state + 1)}>
            add card
          </Button>
        </div>
      </div>
    )
}

export default MainLayout