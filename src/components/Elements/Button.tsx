import React from "react"

const Button = (props: {
    color?: "blue" | "slate"
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}) =>{ 
  const {onClick, children} = props;
  const color = props.color ?? "blue"
  const className = `bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded`

  return (
    <button
        className={className}
        onClick={onClick}>
        {children}
    </button>
    )
}

export default Button