import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15); //state ko change krne k liye responsible hota h aur ui pe reflect krata h
   
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
