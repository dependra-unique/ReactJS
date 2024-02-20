import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App(props) {
 
  


  let myObj = {
    username: "Depu",
    age: 20
  }

  let arr = [1, 2, 3, 4]


  const image = "https://images.pexels.com/photos/20150393/pexels-photo-20150393/free-photo-of-modelo-glam-talla-grande.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  return (
    <>
      <h2 className='bg-green-400 text-black p-10 font-bold text-xl/8 rounded-lg mb-4' >Tailwind CSS</h2>


     <Card username = "Depuraj" Obj = {myObj} myArr = {arr} btnText = "click me"/>
     <Card username = "Adarsh Tiwari" btnText = "visit me"/>
     


{/*  
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src={image} alt="" width="384" height="512" />
  <div class="pt-6 text-ce space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
  </figure>*/}



    </>
  )
}

export default App
