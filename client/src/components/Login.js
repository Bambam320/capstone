import React,{useState} from 'react'
import "./Login.css"
import { accessUrl } from '../spotify'
function Login(setUser, setIsAuthenticated) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState([])

  function handleSubmit(e){
      e.preventDefault()
      const user = {
          username: username,
          password
      }

      fetch(`http://localhost:3000/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(user =>{
            setUser(user)
            setIsAuthenticated(true)
          })

        } else {
          res.json()
          .then(json => setError(json.error))
        }
      })
  }
  
  return (
    <div className='login'>
      <h1>🎶Fakeify&reg;</h1>

      
      <form onSubmit={handleSubmit}>
        <label className="font-bold px-1">Username:&nbsp;
        <input
          className=""
          name="user[email]"
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        </label>

        <label className="font-bold px-1">Password:&nbsp;
        <input
          className=""
          name="user[password]"
          type="text"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </label>
      
</form>
      <a href={accessUrl}>Login with Spotify</a>
    </div>
  )
}

export default Login