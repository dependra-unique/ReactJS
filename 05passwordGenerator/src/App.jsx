import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  //useRef hook =>kisi ka refference lene ke lia useRef hook ko use kate hai
  const passwordRef = useRef(null)



  //useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "@#$~!%^&*?"
    }

    for(let i = 1; i<=length; i++){
      let charIndex = Math.floor(Math.random() * str.length + 1)
      // pass += str[charIndex]
      pass += str.charAt(charIndex)
    }

    setPassword(pass)

    }, [length, numAllowed, charAllowed])


    const copyPasswordClipboard = useCallback(() =>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 8)
      window.navigator.clipboard.writeText(password)
    }, [password])
    

    //useEffect hook
    useEffect(() =>{
      passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-screen max-w-md mx-auto shadow-md rounded-lg text-blue-300 bg-black px-4 py-8'>
        <h1 className='flex shadow rounded-lg text-3xl justify-center mb-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type='text' 
            value={password}
            className='outline-none w-full py-1 px-3'
          placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordClipboard}
            className='outline-none bg-blue-700 px-3 py-0.5 shrink-0'
          >Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input 
                type='range'
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target. value)}}
              />
              <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked= {numAllowed}
              id='numInput'
              onChange={() => {
                setNumAllowed((prev) => !prev);
            }}
            />
            <label 
              htmlFor='numInput'>
              Numbers
            </label>

            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                id='charInput'
                defaultChecked= {charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev)
              }}
              />
              <label
                htmlFor='charInput'
              >Characters</label>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
