import React from "react"

const IconButton = (props: {
    color?: "blue" | "red"
    shape?: "rounded-full" | "rounded-none" | "rounded"
    shadow?: "shadow" | "shadow-lg" | "shadow-xl"
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode,
}) =>{ 
  const {onClick, children} = props;
  const color = props.color ?? "blue"
  if(color == "blue") {
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 ${props.shadow ?? "shadow"} ${props.shape ?? "rounded-none"}`}
            onClick={onClick}>
            {children}
        </button>
        )
  } else {
    return (
        <button
            className={`bg-red-500 hover:bg-red-700 text-white font-bold p-2 ${props.shadow ?? "shadow"} ${props.shape ?? "rounded-none"}`}
            onClick={onClick}>
            {children}
        </button>
        )
  }
}

export default IconButton