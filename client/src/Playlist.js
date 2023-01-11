//functional imports
import React, { useState, useContext } from "react";
import { SpotifyContext } from "./SpotifyContext";

// css and component imports
import "./Body.css";
import "./App.css";
import SongRow from "./SongRow";


function Playlist() {
  const { currentPlaylist, user } = useContext(SpotifyContext);

  console.log("user from playlist", user)
  console.log("new playlist from Playlist", currentPlaylist)

  return (
    <div className="body">
    <div className="body__info">
      <img className="image_class" src={currentPlaylist.image} alt={currentPlaylist.name} />
      <div className="body__infoText">
        <h4>{currentPlaylist.name}</h4>
        <p>{currentPlaylist.description}</p>
        <p>{`${user.username}'s playlist`}</p>
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
      {/* {discover_weekly?.tracks.items.map((item) => (
        <SongRow track={item.track} />
      ))} */}
    </div>
  </div>
  )
}

export default Playlist;