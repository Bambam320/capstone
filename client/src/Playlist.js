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

function Playlist() {
  const { currentPlaylist, setCurrentPlaylist, localUser } = useContext(SpotifyContext);
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState(currentPlaylist);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [tracks, setTracks] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (!!currentPlaylist) {
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

  function handleSave(e) {
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
          setErrors(err.error)
        });
      }
    })
    setOpen(false);
  }

  function handleDialogUpdate(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSearchSubmit(e) {
    e.preventDefault()
    fetch(`/spotify_api/${search}`)
      .then((res) => {
        if (res.ok) {
          res.json().then((tracks) => {
            setTracks(tracks)
          })
        } else {
          res.json().then((err) => {
            setErrors(err.error)
          });
        }
      })
      setSearch('')
  }

  function handleSearchInputChange(e) {
    setSearch(e.target.value)
  }

console.log(tracks)
console.log(tracks.length)

  function handleAddTrack (track) {
    fetch(`/playlists/${currentPlaylist.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({trackId: track.id})
    }).then((res) => {
      if (res.ok) {
        res.json().then((updatedPlaylist) => {
          setCurrentPlaylist(updatedPlaylist)
        });
      } else {
        res.json().then((err) => {
          setErrors(err.error)
        });
      }
    })
  }


  return (
    <>
    <Grid container className="body">
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
          <p>{`${localUser.username}'s playlist`}</p>
        </div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            sx={{ backgroundColor: 'transparent' }}
          >
            <DialogTitle
              sx={{ backgroundColor: '#3b3637', color: 'white' }}
            >Edit and update the details</DialogTitle>
            <DialogContent
              sx={{ backgroundColor: '#3b3637' }}
            >
              <DialogContentText
                sx={{ color: 'white' }}
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
              sx={{ backgroundColor: '#3b3637' }}
            >
              <Button onClick={handleClose}
                sx={{ color: 'white' }}
              >Cancel</Button>
              <Button onClick={handleSave}
                sx={{ color: 'white' }}
              >Save</Button>
            </DialogActions>
          </Dialog>


        </div>
      </div>
        </Grid>
      <Grid container>

      <Grid item>
        <form onSubmit={handleSearchSubmit}>
          <Paper
            component="form"
            elevation={0}
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              width: 250,
              marginLeft: '2em',
              backgroundColor: 'grey'
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for Songs, Artists or Albums"
              type='text'
              name='search'
              value={search}
              onChange={handleSearchInputChange}
              />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon onClick={handleSearchSubmit} />
            </IconButton>
          </Paper>
        </form>
      </Grid>
      <Grid item>
        {tracks.length > 0 ?
          tracks.map((track) => {
            return <SongRow track={track} key={track.id} onAddTrack={handleAddTrack} />
          })
          :
          <></>
        }
      </Grid>

    </Grid>
              </>
  )
}

export default Playlist;