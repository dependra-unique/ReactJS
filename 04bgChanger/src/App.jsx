import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

 
  return (
    
    <div className="w-screen h-screen duration-200"
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl text-black'>
          <button
          onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("green")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "green"}}
          >Green</button>
           
          <button
          onClick={() => setColor("blue")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick={() => setColor("olive")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "olive"}}
          >Olive</button>
           
          <button
          onClick={() => setColor("grey")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "grey"}}
          >Grey</button>
          
          <button
          onClick={() => setColor("yellow")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
           
          <button
          onClick={() => setColor("pink")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "pink"}}
          >Pink</button>
           
          <button
          onClick={() => setColor("purple")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "purple"}}
          >Purple</button>
           
          <button
          onClick={() => setColor("lavender")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "lavender"}}
          >Lavender</button>
           
          <button
          onClick={() => setColor("white")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg' 
          style={{backgroundColor: "white"}}
          >White</button>
          
          <button
          onClick={() => setColor("black")}
          className='outline-none px-4 py-1 rounded-3xl shadow-lg text-white' 
          style={{backgroundColor: "black"}}
          >Black</button>
          
        </div>
      </div>
    </div>
    
    
  )
}

export default App








// //practice
// import React from 'react'
// import { useState } from 'react'

// function App() {

//   const [color, setColor] = useState("red")



//   return (
//     <>
//       <div className={`w-screen h-screen bg-${color}-700`} >

//       <h1>hello, {color} </h1>
//       <div className='border flex flex-wrap bg-white ' >
//         <div className='rounded-2xl border px-4 mx-2 bg-black'>
//           <button
//           className="px-8 rounded-3xl bg-green-700"
//           onClick={() => {
//             setColor("green")
//           }}
//           >green</button>
//         </div>
//         <div className='rounded-2xl border px-4 mx-2 bg-black'>
//         <button 
//           className='px-8 rounded-3xl bg-yellow-700'
//           onClick={() => {
//             setColor("yellow")
//           }}
//           >yellow</button>
//         </div>
        
//         <div className='rounded-2xl border px-4 mx-2 bg-black'>
//           <button 
//           className='px-8 rounded-3xl bg-red-700'
//           onClick={() => {
//             setColor("red")
//           }}
//           >red</button>
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }

// export default App

