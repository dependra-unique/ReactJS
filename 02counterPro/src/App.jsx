import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 
  // let counter =  7

  //hooks => useState, it is used to change thge state 
  //it returns two parameter as a array element
  // First parameter is variable(counter)
  //Second parameter is method/function who set the value of counter(variable)
 let [counter, setCounter] = useState(5)


 //addvalue function
  const addValue = ()=>{
    counter = counter + 1
    if(counter <=50){
      setCounter(counter)
    }else{
      alert("I can't move above 50")
    }
  

    // console.log("clicked", counter,"random value", Math.random());
  }

 /*    //addvalue function => Interview perpose se
  const addValue = ()=>{
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)     // ek ek hi value update hogi because same kaam hai => ye sab useState ki vajah se ho rha hai


  }


  //Solution of above , when we want to update last called value(means last wali call)
  const addValue = ()=>{
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)    


  }

  */







//removebValue function
  const removeValue = ()=>{
      counter = counter - 1
      if(counter >= 0){
        setCounter(counter)
      }else{
        alert("I can't move below 0")
      }
      
  }


  return (
    <>
      <h1>HareRam</h1>

      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>

      <button onClick={removeValue}>Remove value {counter}</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
