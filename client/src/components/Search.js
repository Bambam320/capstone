//functional imports
import React, { useContext, useEffect, useState } from "react";
import { SpotifyContext } from "../SpotifyContext";
import { useNavigate } from 'react-router-dom';

// imports styles and components

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
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Search() {
  // sets hooks
  const { mainSearch, setMainSearch } = useContext(SpotifyContext);
  const navigate = useNavigate();
  const [results, setResults] = useState();
  const [errors, setErrors] = useState([]);

useEffect(() => {
  if (mainSearch.length > 0) {
    fetch(`/spotify_api/browse?term=${mainSearch}`).then((response) => {
      if (response.ok) {
        response.json().then((results) => {
          setResults(results)
          setMainSearch('')
        });
      } else {
          response.json().then((err) => setErrors(err.errors));
      }
    });
  }
  }, [mainSearch])

console.log("results", results)

  // let playlistResults = results.playlists.map((playlist) => {
  //   return (
  //     <></>
  //   )
  // })

  return (
    <div>
      <Grid container>
        <Grid item>
          {/* {playlistResults} */}
        </Grid>
      </Grid>

         {/* {errors.map((error) => {
          return (
            <span key={error} className='error'>
              {error}
            </span>
          );
        })} */}
    </div>

  )
}

export default Search;