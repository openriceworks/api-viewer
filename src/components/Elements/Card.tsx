
function Card (props: {children: React.ReactNode}) {
    return (
        <div className="rounded shadow m-1 bg-white dark:bg-zinc-700">
          {
            props.children
          }
        </div>
    )
}

export default Card