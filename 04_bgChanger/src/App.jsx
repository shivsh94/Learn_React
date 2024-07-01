import { useState } from "react"

 

function App() {
   const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
         <div className="fixed flex flex-wrap
          justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center
            gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button onClick={() => setColor("RED")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600">RED</button>
              <button onClick={() => setColor("GREEN")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600">GREEN</button>
              <button onClick={() => setColor("BLUE")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600">BLUE</button>
              <button onClick={() => setColor("PURPLE")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-600">PURPLE</button>
              <button onClick={() => setColor("BLACK")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black">BLACK</button>
            </div>
          </div>
          
      </div>
    </>
  )
}

export default App
