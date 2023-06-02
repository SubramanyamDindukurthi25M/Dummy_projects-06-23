import { useState } from 'react'
import { Counter } from './Counter'
import {Button} from 'primereact/button'
import {Menubar} from 'primereact/menubar'
import { Greet } from './Greet'

export const App = () => {
  const [count, setCount] = useState({
    countValue: 0
  })

  const incrementValue = () => setCount({
    ...count,
    countValue: count.countValue + 1
  })
  const decrementValue = () => setCount({
    ...count,
    countValue: count.countValue - 1 >= 0 ? count.countValue - 1 : 0
  })

  return (
    <section className='overflow-x-hidden'>
      <h1>
        PrimeReact Tutorial 
      </h1>
      <Button
        label='Submit'
        icon='pi pi-check'
        iconPos='right'
        severity='info'
        raised
      />
      <Menubar
        className='bg-purple-500 p-4 text-white text-2xl mt-2'
        start='PrimeReact-Crash-Course'
      />
      <Counter 
        count={count} 
        incrementValue={incrementValue} 
        decrementValue={decrementValue}  
      />
      <Greet/>
    </section>
  )
}