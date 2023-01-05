import React, { useContext } from "react";
import { SpotifyContext } from "../SpotifyContext";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
function Header() {
  const { setUser, setIsAuthenticated } = useContext(SpotifyContext);

  function handleLogout () {
    fetch("/logout")
  }

  return (
    <div className='header'>
      <div className='header__left'>
      <SearchIcon />
      <input placeholder='Search for Artists, Songs, or Artists' type='text' />
      </div>
      
      <div className='header__right'>
        <button onClick = {handleLogout}> Log out </button>
        {/* <Avatar src='' alt='omar' />
        <h4>Omar</h4> */}
      </div>
    </div>
  );
}

export default Header;
