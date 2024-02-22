import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-screen h-screen'
    style={{backgroundColor: color}}
    >
      <div className=' fixed flex flex-wrap justify-center w-full max-w-xl bottom-12 rounded-3xl ml-400'>

        <div className='flex flex-wrap justify-center bg-white rounded-xl max-w-xl px-3 py-3 gap-3'>
          <button 
          className='outline-none text-white'
          style={{backgroundColor: "red"}}
          onClick={() => setColor("red")}
          >Red</button>

          <button 
          className='outline-none text-white'
          style={{backgroundColor: "blue"}}
          onClick={() => setColor("blue")}
          >Blue</button>

          <button 
          className='outline-none text-white'
          style={{backgroundColor: "green"}}
          onClick={() => setColor("green")}
          >Green</button>
          
          <button 
          className='outline-none text-white'
          style={{backgroundColor: "grey"}}
          onClick={() => setColor("grey")}
          >Grey</button>

          <button 
          className='outline-none text-white'
          style={{backgroundColor: "orange"}}
          onClick={() => setColor("orange")}
          >Orange</button> 
           
          <button 
          className='outline-none text-white'
          style={{backgroundColor: "black"}}
          onClick={() => setColor("black")}
          >Black</button>      
        </div>
      </div>
    </div>
  )
}

export default App
