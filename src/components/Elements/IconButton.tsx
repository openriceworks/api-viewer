import React from "react"

const IconButton = (props: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}) =>{ 
  const {onClick, children} = props;
  return (
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 shadow-xl rounded-full"
        onClick={onClick}>
        {children}
    </button>
    )
}

export default IconButton