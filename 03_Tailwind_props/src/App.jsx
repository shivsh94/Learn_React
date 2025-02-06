import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h2 className='bg-green-600 mb-4' > Testing TailWind CSS</h2>
        <Card username="chai" btnText="click me"/> //yha props ka use kiya gya h....
        <Card username="code" btnText="visit me"/> //props components ko reuseable bnata h 

    </>
  )
}

export default App
