import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  //useRef hook
  const passwordRef = useRef(null)


  //password generator function
  const passWordGenerator = useCallback(() => {
    
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "0123456789"
  
      if(charAllowed)  str += "!@#$%^&*~?"
  
      for(let i = 1; i<=length; i++){
        let charIndex = Math.floor(Math.random() * str.length  + 1) 
        
        pass += str.charAt(charIndex)
        
      }
      setPassword(pass)
    
  }, [length, numberAllowed, charAllowed, setCharAllowed]) 


  useEffect(() => {
    passWordGenerator()
  }, [length, numberAllowed, charAllowed, passWordGenerator])
  
  
const copyPassword = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 10)
  window.navigator.clipboard.writeText(password)
})


  return (
    <div className='w-screen h-screen'>
      <div className='flex flex-wrap justify-center w-700 max-w-xl py-5 rounded-xl' style={{backgroundColor: "lightblue"}}>
        <div className="flex">
          <input
            className='w-60 rounded-md outline-none py-1 px-1 cursor-pointer'
            type='text'
            value={password}
            style={{backgroundColor: "grey"}}
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPassword}
            className='bg-blue-700'
            >Copy
          </button>
          </div>
      </div>
      <div className='flex flex-wrap justify-center max-w-xl py-3 rounded-xl bg-orange-700'>
            <input
            className='cursor-pointer'
            type="range"
            min={1}
            max={100}
            value={length}
            defaultChecked={length}
            id='leng'
            onChange={(e) => {
              setLength(e.target.value)
            }}
            />   
            <label
            className='text-black cursor-pointer'
            htmlFor='leng'
            >Length: {length}
            </label>  

            <input
            className='ml-4 cursor-pointer'
            type='checkbox'
            defaultChecked={numberAllowed}
            id='num'
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label
            className='text-black cursor-pointer'
            htmlFor='num'
            >Numbers</label>  

            <input
            className='ml-4 cursor-pointer'
            type='checkbox'
            defaultChecked={charAllowed}
            id='char'
            onChange={() =>{
              setCharAllowed((prev) => !prev)
            }}
            />
            <label
            className='text-black cursor-pointer'
            htmlFor='char'
            >Characters</label>
      </div> 
      
    </div>
  )
}

export default App
