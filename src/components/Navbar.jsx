import React from 'react'
import "../css/component css/Navbar.css"
import logo from "../images/logo.png"
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import DiamondIcon from '@mui/icons-material/Diamond';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Navbar() {
  return (
    <div className='nav-parent'>
      <div className='navbar'>
        <div className="navbar-left">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-right">
          <Link to="" className='link-a'>Home</Link>
          <Link to="/activity" className='link-a'>Activity</Link>
          <Link to="" className='link-a'>Promotion</Link>
          <Link to="" className='link-a'>Wallet</Link>
          <Link to="/registration" className='link-a btn-a'>Account</Link>
        </div>
        <a href='#' className="call-btn">
          <CallIcon />
        </a>
      </div>
      <div className="bottom-navbar">
        <Link to="" className="bottom-navbar-items">
          <HomeIcon className='bottom-navbar-icon'/>
          <p>Home</p>
        </Link>
        <Link to="/activity" className="bottom-navbar-items">
          <EmojiEventsIcon className='bottom-navbar-icon'/>
          <p>Activity</p>
        </Link>
        <Link to="" className="bottom-navbar-items">
          <DiamondIcon className='bottom-navbar-icon'/>
          <p>Promotion</p>
        </Link>
        <Link to="" className="bottom-navbar-items">
          <AccountBalanceWalletIcon className='bottom-navbar-icon'/>
          <p>Wallet</p>
        </Link>
        <Link to="/registration" className="bottom-navbar-items">
          <AccountCircleIcon className='bottom-navbar-icon'/>
          <p>Account</p>
        </Link>
      </div>
    </div>
  )
}
