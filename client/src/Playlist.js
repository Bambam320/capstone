//functional imports
import React, { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { SpotifyContext } from "./SpotifyContext";

// css and component imports
import "./Body.css";
import "./App.css";
import SongRow from "./SongRow";

//material ui imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Playlist() {
  const { currentPlaylist, setCurrentPlaylist, user } = useContext(SpotifyContext);
  const [tracks, setTracks] = useState([])
  const [errors, setErrors] = useState([])
  const [open, setOpen] = useState(false);
  const params = useParams()

  console.log("currentPlaylist from playlist", currentPlaylist)

  useEffect(() => {
    if (currentPlaylist) {
      fetch(`/playlists/${params.id}`)
        .then((res) => {
          if (res.ok) {
            res.json().then((playlist) => setCurrentPlaylist(playlist))
          } else {
            res.json().then((err) => setErrors(err.errors));
          }
        })
    }
  }, [])

  console.log("user from playlist", user)
  console.log("new playlist from Playlist", currentPlaylist)

function handleSave () {
  console.log("hitting handle save")
}
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Grid className="body">
      <div className="body__info">
        {errors.map((error) => {
          return (
            <span key={error} className='error'>
              {error}
            </span>
          );
        })}

<Grid item component={Button} onClick={handleClickOpen} >

        <img className="image_class" src={currentPlaylist.image} alt={currentPlaylist.name} />
        <div className="body__infoText">
          <h4>{currentPlaylist.name}</h4>
          <p>{currentPlaylist.description}</p>
          <p>{`${user.username}'s playlist`}</p>
        </div>

</Grid>
     




    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit and update the details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <Grid container>
            <Grid item>

            </Grid>

          </Grid>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>

          
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          this is where stuff will be
          {/* <PlayCircleFilled className="body__shuffle" />
        <Favorite fontSize="large" />
        <MoreHoriz /> */}
        </div>
        this is for other stuff
        {tracks.name ?
          tracks.track.map((track) => {
            <SongRow track={track} />
          })
          :
          <></>
        }
        add styling and search and list for songs
        add current user to top right header
      </div>
    </Grid>
  )
}

export default Playlist;