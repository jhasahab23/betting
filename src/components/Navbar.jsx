import React from 'react'
import "../css/component css/Navbar.css"
import logo from "../images/logo.png"
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
        </div>
        <div className="navbar-right">
            <Link to="" className='link-a'>Home</Link>
            <Link to="" className='link-a'>Activity</Link>
            <Link to="" className='link-a'>Promotion</Link>
            <Link to="" className='link-a'>Wallet</Link>
            <Link to="" className='link-a btn-a'>Account</Link>
        </div>
        <a href='#' className="call-btn">
            <CallIcon/>
        </a>
    </div>
  )
}
