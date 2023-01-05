import React from 'react'
import "./Body.css"
import Header from './Header'
import SongRow from './SongRow'
function Body() {
  return (
    <div className="body">
      
      <Header />

      <div className="body__info">
        <img src='' alt=""/>
      <div className='body__infoText'>
        <SongRow />
      </div>
      </div>
    </div>
  )
}

export default Body