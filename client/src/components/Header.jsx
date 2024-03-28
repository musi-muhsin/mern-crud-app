import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
// import { FaBeer } from "react-icons/fa";

const Header = () => {
  return (
    <nav className='h-[5rem] grid place-items-center bg-[#ffffff00]'>
      <div className="container flex items-center justify-between mx-auto  ">
      <Link to="/">
        <img src={Logo} className='w-40' alt="" />
      </Link>
      <ul className='flex items-center'> 
        <li className='text-xs px-4 py-3'> <Link to="/profile">Admin</Link> </li>
        <li className='text-xs px-4 py-3'> <Link to="/create">Create Post</Link> </li>
        <li className='text-xs px-4 py-3'> <Link to="/author">Authors</Link> </li>
        <li className='text-xs px-4 py-3'> <Link to="/logout">Logout</Link> </li>
      </ul>
    </div>
    </nav>

  )
}

export default Header
