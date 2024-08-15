import React from 'react'
import Logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='bg-violet-700 flex items-center h-[70px] px-[30px] justify-between border-b-[1px] border-white'>
      <img className='my-auto' src={Logo} alt="Logo" width={80} height={80} />  
        <div className='flex space-x-5 text-white font-bold'>
        <NavLink to={'/'}>
        Users
            </NavLink>
            <NavLink to={'/products'}>
            Products
        </NavLink>
        </div>
        <span></span>
      </header>
  )
}

export default Header
