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
  const [form, setForm] = useState(currentPlaylist)
  
  console.log(currentPlaylist)
  console.log("form", form)
  
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
    
    useEffect(() => {
      setForm(currentPlaylist)
    }, [currentPlaylist])
    
    function handleSave (e) {
      e.preventDefault()
      fetch(`/playlists/${currentPlaylist.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
          image: form.image
        })
      }).then((res) => {
        if (res.ok) {
          res.json().then((updatedPlaylist) => {
            setCurrentPlaylist(updatedPlaylist)
          });
        } else {
          res.json().then((err) => {
            setErrors(err.error)});
        }
      })
    }

    function handleDialogUpdate (e) {
      setForm({...form, [e.target.name]: e.target.value})
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

        <div onClick={handleClickOpen} >

        <img className="image_class" src={currentPlaylist.image} alt={currentPlaylist.name} />
        </div>
        <div className="body__infoText" onClick={handleClickOpen}>
          <h4>{currentPlaylist.name}</h4>
          <p>{currentPlaylist.description}</p>
          <p>{`${user.username}'s playlist`}</p>
        </div>
    <div>
      <Dialog 
        open={open} 
        onClose={handleClose} 
        sx={{backgroundColor: 'transparent'}}
      >
        <DialogTitle
          sx={{backgroundColor: '#3b3637', color: 'white'}}
        >Edit and update the details</DialogTitle>
        <DialogContent
          sx={{backgroundColor: '#3b3637'}}
        >
          <DialogContentText 
            sx={{color: 'white'}}
          >
            Change the information below and click save to update your playlist!
          </DialogContentText>
          <TextField
            sx={{ input: { color: 'white' } }}
            margin="dense"
            name="name"
            fullWidth
            variant="standard"
            onChange={handleDialogUpdate}
            value={form.name}
          />
          <TextField
            sx={{ input: { color: 'white' } }}
            margin="dense"
            name="description"
            fullWidth
            variant="standard"
            onChange={handleDialogUpdate}
            value={form.description}
          />
          <TextField
            sx={{ input: { color: 'white' } }}
            margin="dense"
            name="image"
            fullWidth
            variant="standard"
            onChange={handleDialogUpdate}
            value={form.image}
          />
        </DialogContent>
        <DialogActions
          sx={{backgroundColor: '#3b3637'}}
        >
          <Button onClick={handleClose}
            sx={{color: 'white'}}
          >Cancel</Button>
          <Button onClick={handleSave}
            sx={{color: 'white'}}
          >Save</Button>
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