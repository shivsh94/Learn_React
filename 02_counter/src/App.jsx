import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);
   
  // let Counter = 6

  const addValue = () => {
    if(counter <20){
       //  Counter += 1
        setCounter(counter + 1);
    }
   
  }
  const removeValue = () => {
    if(counter >0){
      // Counter -= 1
    setCounter(counter - 1);
    }
    }

  return ( 
    <>
      <h1>hello react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>
        Add value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
