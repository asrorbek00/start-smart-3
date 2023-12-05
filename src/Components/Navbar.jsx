import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'

function Navbar() {
  return (
    <div className='lg:ml-32 md:ml-24 sm:ml-5 flex gap-16'>
    <div className="dropdown nav-menu mt-2">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <span><RxHamburgerMenu size={25} /></span>
      </div>
      <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
      <li ><a href=''>Asosiy</a></li>
      <li ><a href='#services'>Xizmatlar</a></li>
      <li ><a href='#portfolio'>Portfolio</a></li>
      <li ><a href='#jamoa'>Jamoa</a></li>
      <li ><a href='#contact'>Bog`lanish</a></li>
      
    </ul>
    </div>
    <div>
        <img src="public/Logo.png" alt="" className='w-40 mt-4 lg:relative sm:absolute sm:top-0 sm:right-2' />
        </div>
        <ul className="flex cursor-pointer font-mono lg:text-xl md:text-lg ">
      <li className='navli py-2 px-[35px]'><a href='#'>Asosiy</a> </li>
      <li className='navli py-2 px-[35px]'><a href='#services'>Xizmatlar</a></li>
      <li className='navli py-2 px-[35px]'><a href='#portfolio'>Portfolio</a></li>
      <li className='navli py-2 px-[35px]'><a href='#jamoa'>Jamoa</a></li>
      <li className='navli py-2 px-[44px]'><a href='#contact'>Bog`lanish</a></li>
    </ul>
    </div>
  )
}

export default Navbar