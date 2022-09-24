import Card from "../Elements/Card"

const FlexWrapLayout = (props:{count: number}) => {

    const {count} = props
    const displayCardList = (count: number) => [...Array(count)].map(() => 
    (
      <div className='w-96'>
        <Card/>
      </div>  
    ))

    return (
        <div className='flex flex-wrap'>
            {
                displayCardList(count)
            }
        </div>
    )
}
export default FlexWrapLayout