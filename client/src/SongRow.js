import React from 'react'
import './SongRow.css'

function SongRow() {
  return (
    <div className="songRow" >
    <img className="songRow__album" src="https://i.scdn.co/image/ab67616d0000b2735ebe6cbd74a47a5e8ea88985" alt="Smile" />
    <div className="songRow__info">
      <h1>Track name</h1>
      <p>
        {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "}
        {track.album.name} */}
              {/* sample of what our code will looklike */}
      </p>
    </div>
  </div>
    )
  }
  
  export default SongRow
  //     <div className='songRow'>
  //       <img className="songRow__album" src='https://i.scdn.co/image/ab67616d0000b2735ebe6cbd74a47a5e8ea88985'alt='Smile'/>
  
  //       {/* album image  */}
  //       <div className='songRow__info'>
  //       <h1>Track:name</h1>
  //       <p>
  //       {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "}
  //           {track.album.name} */
  //           }
  //       </p>
  // </div>
  //     </div>