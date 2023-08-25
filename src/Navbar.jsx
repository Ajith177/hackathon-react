import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div class="navbar">
      <Link to="/HOME">HOME</Link>
      <Link to="/ABOUT">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Login">LOGIN</Link>
      <Outlet/>
    </div>
  )
}

export default Navbar;
