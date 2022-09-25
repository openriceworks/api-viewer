import React from "react"

const FlexWrapLayout = (props:{children: React.ReactNode[]}) => {
    const {children} = props
    return (
        <div className='flex flex-wrap'>
            {
              children
            }
        </div>
    )
}
export default FlexWrapLayout