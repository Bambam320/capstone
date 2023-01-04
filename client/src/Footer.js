import React from 'react'
import './Footer.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
function Footer() {
  return (
    <div className="footer">
    
    <div className="footer__left">
    </div>
    <div className="footer__center">
      <ShuffleIcon className="footer__green"/>
      <SkipPreviousIcon className='footer__icon'/>
      <PlayCircleIcon fontSize='large class' className='footer__icon'/>
      <SkipNextIcon className="footer__icon" />
      <RepeatIcon className="footer__green" />
      
    </div>
    <div className="footer__right">
    {/* <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid> */}
    </div>
    </div>
  )
}

export default Footer