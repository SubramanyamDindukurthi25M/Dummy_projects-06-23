import { Button } from "primereact/button"
import { Card } from "primereact/card"

export function Counter({
  incrementValue,
  decrementValue,count
}) {
  return <div className="grid my-3">
        <div className="col-4">
          <Card title={`counter - ${count.countValue}`} className='bg-gray-500 border-round border-1 capitalize'>
            <p className='m-0'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate hic veniam assumenda accusamus, ipsum beatae!
            </p>
            <Button label='increment' severity='warning' raised className='capitalize text-white mt-2 mr-2' onClick={incrementValue} />
            <Button label='decrement' severity='success' raised className='capitalize text-white mt-2 mr-2' onClick={decrementValue} />
          </Card>
        </div>
      </div>
}
  