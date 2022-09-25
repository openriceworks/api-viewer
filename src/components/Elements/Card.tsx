
function Card (props: {children: React.ReactNode}) {
    return (
        <div className="rounded shadow p-4 m-1 bg-white">
          {
            props.children
          }
        </div>
    )
}

export default Card