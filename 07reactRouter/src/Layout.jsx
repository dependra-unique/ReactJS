import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        {/* jab hume header and footer ko fix(no change) rakhna hota hai aur home ko change karna hota hai tab hum <Outlet /> ka use karte hai  ===== outlet , Layout.jsx file ko base file consider karega ,aur jha par outlet use hua hai uss section mein change karega*/}
        <Header />
        <Outlet />     
        <Footer />

        </>
    )
}

export default Layout
