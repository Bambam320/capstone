import React from 'react'
import './SongRow.css'
import './SidebarOption'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AddIcon from '@mui/icons-material/Add';

function SongRow({ track, onAddTrack }) {
  return (

    <Grid container className="songRow" width="700px">

        <Grid item xs={1}>
        <img src={track.album.images[0].url} alt="" className="songRow__album" />
        </Grid>

        <Grid item xs={8}>
        <div className="songRow__info">
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")} -{" "}
            {track.album.name}
          </p>
        </div>
        </Grid>

      <Grid item xs={3}>
        <Button 
          className='sidebarOption'
          sx={{
            color: 'grey',
            textTransform: 'none',
            height: '30px',
            marginLeft: '-8px',
            fontSize: '16px',
          }}
        >
        <PlayCircleIcon sx={{marginRight: '5px'}}/>
          <h4>Track</h4>
        </Button>
        <Button 
          onClick={() => {onAddTrack(track)}} 
          className='sidebarOption'
          sx={{
            color: 'grey',
            textTransform: 'none',
            height: '30px',
            marginLeft: '-8px',
            fontSize: '16px',
          }}
        >
          <AddIcon sx={{marginRight: '5px'}} />
          <h4>To Playlist</h4>
        </Button>
      </Grid>

    </Grid>


  );
}

export default SongRow
