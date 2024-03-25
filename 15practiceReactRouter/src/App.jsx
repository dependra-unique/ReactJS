import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Layout from './Layout'


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
   </Route>
  )
)


function App() {
  

  return (
    <>
     {/* <BrowserRouter >
      <Routes >
          
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
     </BrowserRouter> */}


     <RouterProvider router={router}/>
    </>
  )
}

export default App
