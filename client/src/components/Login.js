import React, { useState, useContext } from 'react'
import { SpotifyContext } from "../SpotifyContext.js";

//imports styles
import "./Login.css"

function Login() {

  //assigns context
  const { setUser, setIsAuthenticated } = useContext(SpotifyContext)

  //assign state
  const defaultFormValues = {
    username: '',
    password: '',
    password_confirmation: '',
  }
  const [form, setForm] = useState(defaultFormValues);
  const [formType, setFormType] = useState('login');
  const [errors, setErrors] = useState([]);

  //updates the form held in state for login or signup
  function handleChange (e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleFormClick (e) {
    e.preventDefault()
    setFormType('users')
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/${formType}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setIsAuthenticated(true)
            setUser(user)})
        } else {
          res.json().then((err) => setErrors(err.errors))
        }
        setForm(defaultFormValues)
      })
  }



  return (
    <div className='login'>
      <h5>🎶Fakeify&reg;</h5>

      {/* ternary that displays either the login or the signup form */}
      {formType === 'login' ?

        // login form    
        <form onSubmit={handleSubmit}>
          <label className=''>Username:&nbsp;
            <input
              className=""
              name="username"
              type="text"
              placeholder="Enter Name"
              value={form.username}
              onChange={handleChange}
              required
            />
          </label>
          <label className=''>Password:&nbsp;
            <input
              className=""
              name="password"
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
        </form>

        :

        //signup form
        <form onSubmit={handleSubmit}>
          <label className=''>
            Username:&nbsp;
            <input
              className=''
              name='username'
              type='text'
              placeholder='Enter Name'
              value={form.username}
              onChange={handleChange}
              required
            />
          </label>
          <label className=''>
            Password:&nbsp;
            <input
              className=''
              name='password'
              type='password'
              placeholder='Enter Password'
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>
          <label className=''>
            Password Confirmation:&nbsp;
            <input
              className=''
              name='password_confirmation'
              type='password'
              placeholder='Enter Password Confirmation'
              value={form.password_confirmation}
              onChange={handleChange}
              required
            />
          </label>
        </form>
      }
      <button onClick={handleFormClick}>New user? Create an account!</button>
      {errors.map((error) => {
          return <span key={error} className=''>{error}</span>;
        })}
      
      <button onClick={handleSubmit}>Login with Spotify</button>
    </div>
  )
}

export default Login