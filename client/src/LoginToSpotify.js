import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SidebarOption from "./SidebarOption";
import "./LoginToSpotify.css";

function LoginToSpotify() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <Button onClick={handleClickOpen}>
        <SidebarOption Icon={LoginIcon} title='Login to Spotify' />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login to Spotify.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To login to this Spotify, please enter your username and password.
          </DialogContentText>
          <TextField
            className='textField'
            autoFocus
            margin='dense'
            id='name'
            label='Username'
            type='text'
            rows={2}
            multiline
            variant='standard'
          />
          <TextField
            className='textField'
            autoFocus
            margin='dense'
            id='name'
            label='Password'
            type='password'
            multiline
            rows={2}
            variant='standard'
          />
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
