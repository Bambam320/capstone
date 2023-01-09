import React from "react";
import "./Body.css";
import "./App.css";
import Header from "./Header";
import Playlist from "./Playlist";
import SongRow from "./SongRow";
function Body() {

  let search = 'thriller'
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/auth/spotify`, {method: "POST"})
      // .then((res) => {
      //   if(res.ok) {
      //     res.json().then((results) => console.log("results", results))
      //   } else {
      //     res.json().then((errors) => console.log("errors", errors))
      //   }
      // })
  }



  return (
    <span>Here is the body component</span>
    // <div className='app'>

    // <div className='body'>
    //   <Header />
    //   <button onClick={handleSubmit}>
    //     click me to check oauth
    //   </button>

    //   <div className='body__info'>
    //     <img src='https://images.unsplash.com/photo-1499415479124-43c32433a620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNTMxNTY2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80' alt='No Music No Life' />
    //     <div className='body__infoText'>
    //       <strong>PLAYLIST</strong>
    //       <h2>PlayList Name</h2>
    //       <p>Description</p>
    //     </div>
    //     {/* list of songs */}
    //   </div>
    //   {/* {playlist.tracks.map((track) => ( */}
    //       <SongRow  />
    //      {/* ))} */}
    // </div>
    // </div>
  );
}

export default Body;
