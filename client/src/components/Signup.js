import React,{useContext, useState} from "react";
import { SpotifyContext } from "../SpotifyContext";

function Signup() {
  const { setUser, setIsAuthenticated } = useContext(SpotifyContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
      password_confirmation: passwordConfirmation,
    };

    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className=''>
          Username:&nbsp;
          <input
            className=''
            name='user[email]'
            type='text'
            placeholder='Enter Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className=''>
          Password:&nbsp;
          <input
            className=''
            name='user[password]'
            type='text'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <label className=''>
          Password:&nbsp;
          <input
            className=''
            name='user[password_confirmation]'
            type='text'
            placeholder='Enter Password Confirmation'
            value={password}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </label>
      </form>
    </div>
  );
}

export default Signup;
