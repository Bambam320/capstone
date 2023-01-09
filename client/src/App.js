// importing hooks, route components and context
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpotifyContext } from "./SpotifyContext";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// importing components and css
import "./App";
import "./Body.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginToSpotify from "./LoginToSpotify";
import Navbar from "./components/Navbar";
import Player from "./Player";
import Playlist from "./Playlist";
import Body from "./Body"

// importing material ui components
import Search from "@mui/icons-material/Search";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  // checks the browser session for a logged in user and automatically logs them in
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
  }, []);

  console.log("user", user);
  console.log("auth", isAuthenticated);

  if (!isAuthenticated)
    return (
      <SpotifyContext.Provider value={{ setIsAuthenticated, setUser }}>
        <Login />
      </SpotifyContext.Provider>
    );

  return (
    <Router>
      <SpotifyContext.Provider
        value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
      >
        <Grid container>

          <Grid item >
            <Navbar />
          </Grid>

          <Grid item sx={{flexGrow: 1}}>
            <Routes>
              <Route path="/" element={<Header />} >
                {/* <Route index element={<Home />} /> */}
                <Route path='home' element={<Home />} />
                <Route path='search' element={<Search />} />
                <Route path='collection' element={<Playlist />} />
                <Route path='oauth/spotify' element={<LoginToSpotify />} />
              </Route>
            </Routes>
          </Grid>
        </Grid>



        <Footer />

      </SpotifyContext.Provider>
    </Router>
  );
};

export default App;