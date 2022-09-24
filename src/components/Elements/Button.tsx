import React from "react"

const Button = (props: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}) =>{ 
  const {onClick, children} = props;
  return (
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClick}>
        {children}
    </button>
    )
}

export default Button