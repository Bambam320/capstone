//functional imports
import React, { useContext, useState } from "react";
import { SpotifyContext } from "./SpotifyContext";

// imports styles and components
import "./Header.css";
import "./Body.css";
import { Avatar } from "@mui/material";

//imports material ui
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonIcon from '@mui/icons-material/Person';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Paper from '@mui/material/Paper';


function Header() {
  // setting state for search field
  const [search, setSearch] = useState("")

  // brings state from context
  const { localUser, setLocalUser, setIsAuthenticated } = useContext(SpotifyContext);

  //updates the search value to state
  function handleChange(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log('handle submit is working in search bar')
    console.log(search)

    // fetch(`/spotify_api/${search}`)
    //   .then((r) => r.json())
    //   .then((results) => console.log(results))
  }

  //passed back from Navbar and removes the current user for logout
  function handleLogout() {
    fetch("/logout",
      { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setLocalUser({})
          setIsAuthenticated(false)
        }
        setAnchorEl(null)
      })
  }


  
  // styling for the users menu
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
      />
      ))(({ theme }) => ({
        '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(1),
          minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
  
  // add open and close toggling to the logged in user menu at the top right header
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //handles rendering the profile page
  function handleMyProfile () {
    console.log('handling my profile')
    setAnchorEl(null);
  }
  
  console.log(localUser.avatar_url)

  return (
  
      <div className='header'>
        <div className='header__left'>
          <form onSubmit={handleSubmit}>
            <Paper
              elevation={0}
              sx={{ display: 'flex', alignItems: 'center', width: 500 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Songs, Artists or Albums"
                type='text'
                name='search'
                value={search}
                onChange={handleChange}
              />
              <IconButton 
                type="button" 
                sx={{ p: '10px' }} 
                aria-label="search"
                onClick={handleSubmit}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </form>
        </div>

        <div className='header__right'>

          <Button
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            sx={{textTransform: 'none'}}
          >
            <Avatar 
              className="Avatar" 
              img="data:image/jpeg;base64,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"/>
            {localUser.username}
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleMyProfile} disableRipple>
              <AccountBoxIcon />
              My Profile
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleLogout} disableRipple>
              Log out
            </MenuItem>
          </StyledMenu>
        </div>
      </div>

  );
}

export default Header;
