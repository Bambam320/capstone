// importing hooks, route components and context
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpotifyContext } from "./SpotifyContext";

// importing components and css
import "./Body.css";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./components/Home";
import Login from "./components/Login";
import LoginToSpotify from "./LoginToSpotify";
import Navbar from "./components/Navbar";
import Player from "./Player";
import Playlist from "./Playlist";

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
        <Navbar />
        <div className='body'>
          
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/collection' element={<Playlist />} />
          <Route path='/oauth/spotify' element={<LoginToSpotify />} />
          
        </Routes>
        </div>
          <Footer/>
        
      </SpotifyContext.Provider>
    </Router>
  );
};

export default App;
