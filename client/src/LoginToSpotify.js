import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from '@mui/material/Grid';
import SidebarOption from "./SidebarOption";
import "./LoginToSpotify.css";

function LoginToSpotify() {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Login with your Spotify account.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your username and password.
          </DialogContentText>
<Grid container spacing={1} 
  justifyContent='center'
  alignItems="center"
  direction="space-between"
  >
  <Grid item xs={8} >

          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Username'
            type='text'
            variant='standard'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Password'
            type='password'
            variant='standard'
            />
            </Grid>

            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Login</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginToSpotify;
