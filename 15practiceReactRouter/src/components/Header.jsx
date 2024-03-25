import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='flex gap-8 bg-slate-600'>
            <div>
                <NavLink 
                to='/'
                className={({isActive}) => `${isActive ? "bg-red-500" : ""}`}>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink 
                to='/about'
                className={({isActive}) => `${isActive ? "bg-red-500" : ""}`}>
                    About
                </NavLink>
            </div>
            <div>
                <NavLink 
                to='/contact'
                className={({isActive}) => `${isActive ? "bg-red-500" : ""}`}>
                    Contact
                </NavLink>
            </div>
        </div>
    )
}

export default Header



// className={({isActive}) =>
//                 `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//             }