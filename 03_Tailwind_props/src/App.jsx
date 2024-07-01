import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h2 className='bg-green-600 mb-4' > Testing TailWind CSS</h2>
        <Card username="chai" btnText="click me"/>
        <Card username="code" btnText="visit me"/>

    </>
  )
}

export default App
