import React from 'react'
import { Link } from 'react-router-dom';

import "../Sidebar.css";
import SidebarOption from "../SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import Header from '../Header';
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LoginIcon from "@mui/icons-material/Login";
import Button from '@mui/material/Button';

import "../Header.css";
import "../SidebarOption.css";


import LoginToSpotify from "../LoginToSpotify";
function Navbar() {
  return (
    <>
<Header />
    <div className='sidebar'>
      <h1 className='logo'>🎶Fakeify&reg;</h1>
      <Link to="/home" className='sidebarOption'>
        <HomeIcon className="sidebarOption_icon" />
        <h4>Home</h4>
      </Link>
      <Link to="/search" className='sidebarOption'>
        <SearchIcon className="sidebarOption_icon" />
        <h4>Search</h4>
      </Link>
      <Link to="/collection" className='sidebarOption'>
        <LibraryMusicIcon className="sidebarOption_icon" />
        <h4>My Library</h4>
      </Link>
      <Link to="/oauth/spotify" className='sidebarOption'>
        <LoginIcon className="sidebarOption_icon" />
        <h4>Login with Spotify</h4>
      </Link>
    
      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />
      {/* {playlists?.items?.map(playlist =>(
        <sidebarOption title={playlist.name}/>
      ))} */}

      {/* Hardcoded for now 👇*/}
      <SidebarOption title='Hip Hop' />
      <SidebarOption title='Rock' />
      <SidebarOption title='Rnb' />
    </div>
    </>
  )
}

export default Navbar;