//functional imports
import React, { useState, useRef, useContext, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { SpotifyContext } from "./SpotifyContext";

// styling and component imports
import "./Footer.css";

//import material ui styling
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid, Slider, Box, Stack } from "@mui/material";
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

function Footer() {
  //sets hooks
  const { currentTrack } = useContext(SpotifyContext);
  const [ playState, setPlayState ] = useState(false);
  const audioElem = useRef();

  //play or pause based on playstate
  useEffect(() => {
    if (playState) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [playState, currentTrack])

  useEffect(() => {
    currentTrack ? setPlayState(true) : setPlayState(false)
  }, [currentTrack])

  //set state with boolean to play or pause based on click
  function handlePlayPause () {
    setPlayState(!playState)
  }

  console.log(currentTrack)
  return (
    <div className='footer'>
      <audio src={currentTrack ? currentTrack.preview_url : <></>} ref={audioElem} />

   
      <div className='footer__left'>
        {currentTrack ?
          <>
          <img className="footer__albumLogo" src={currentTrack.album.images[0].url} alt={currentTrack.album.name} />
          <div className='footer__songInfo'>
            <h4>{currentTrack.name}</h4>
            <p>{currentTrack.artists.map((artist) => artist.name).join(', ')}</p>
          </div>
          </>
        :
          <><p>Choose a song!</p></>
        }
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        {playState ? 
          <PauseCircleOutlineIcon fontSize='large' className='footer__icon' onClick={handlePlayPause} />
        :
          <PlayCircleOutlineIcon fontSize='large' className='footer__icon' onClick={handlePlayPause}/>}
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>
      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item xs>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <VolumeDown />
              <Slider aria-label="Volume"

              // size="small"
              // value={value} 
              // onChange={handleChange} 
              />
              <VolumeUp />
            </Stack>

          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
