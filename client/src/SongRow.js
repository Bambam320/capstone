import React from 'react'
import './SongRow.css'
import './SidebarOption'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function SongRow({ track, onAddTrack }) {
  return (

    <Grid container className="songRow" width="700px">

        <Grid item xs={1}>
        <img src={track.album.images[0].url} alt="" className="songRow__album" />
        </Grid>

        <Grid item xs={5}>
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
          <h4>Play Preview</h4>
        </Button>
      </Grid>

      <Grid item xs={3}>
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
          <h4>Add to Playlist</h4>
        </Button>
      </Grid>

    </Grid>


  );
}

export default SongRow
