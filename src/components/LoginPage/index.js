import React, {useState} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import axios from 'axios'

const LoginPage = () => {
  const [show, setShow] = useState(true)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {userName, password}
    console.log(userDetails)
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await axios.post(url, option)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
    } else {
      //   this.setState({errorMsg: data.error_msg})
      setErrorMsg(data.error_msg)
    }
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={submitForm}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt=""
          className="logo"
        />
        <div className="input-box">
          <label htmlFor="username" className="label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="input"
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input
            type={show ? 'password' : 'text'}
            id="password"
            className="input"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            onClick={() => setShow(prevShow => !prevShow)}
            id="check"
          />
          <label htmlFor="check" className="check-label">
            Show Password
          </label>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <p className="error">{errorMsg}</p>
      </form>
    </div>
  )
}

export default LoginPage
