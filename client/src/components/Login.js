import React from 'react'
import "./Login.css"
import { accessUrl } from '../spotify'
function Login() {
  return (
    <div className='login'>
      <h1>🎶Fakeify&reg;</h1>
      <a href={accessUrl}>Login with Spotify</a>
      

    </div>
  )
}

export default Login