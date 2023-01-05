import React from 'react'
import './SongRow.css'

function SongRow({track= "test"}) {
  return (
    <div className='songRow'>
      <img className="songRow__album" src=''alt=''/>

      {/* album image  */}
      <div className='songRow__info'/>
      <p>
      {/* {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name} */
          }
          {/* sample of what our code will looklike */}
      </p>

    </div>
  )
}

export default SongRow