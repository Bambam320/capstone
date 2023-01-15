//functional imports
import React, { useState, useRef, useContext, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { SpotifyContext } from "./SpotifyContext";

import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Grid, Slider } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import SpotifyPlayer from 'react-spotify-web-playback';


function Footer() {
  const { localUser } = useContext(SpotifyContext);

  let song = "https://p.scdn.co/mp3-preview/18781de52205d9ade22904945510161feab085ce?cid=8cbb296f5dc941548b0bd90999a4c806"

  const audioElem = useRef();

  function handlePlay () {

    audioElem.current.play();
  }

  return (
    <div className='footer'>
      <audio src={song} ref={audioElem} />

   
      <div className='footer__left'>
        <img className="footer__albumLogo" src='https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Phobia-Breaking_Benjamin_album.jpg/220px-Phobia-Breaking_Benjamin_album.jpg' alt="Phobia" />
        <div className='footer__songInfo'>
          <h4>The Diary of Jane</h4>
          <p>Breaking Benjamin</p>
        </div>
      </div>
      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' onClick={handlePlay}/>
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
