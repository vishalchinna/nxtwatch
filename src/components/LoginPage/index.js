import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginPage extends Component {
  state = {show: true, username: '', password: '', errorMsg: ''}

  showPassword = () => this.setState(prev => ({show: !prev.show}))

  submitForm = async event => {
    const {username, password} = this.state
    const {history} = this.props
    event.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  renderUsername = event => {
    this.setState({username: event.target.value})
  }

  renderPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {show, errorMsg} = this.state
    return (
      <div className="login-container">
        <form className="login-box" onSubmit={this.submitForm}>
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
              onChange={this.renderUsername}
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
              onChange={this.renderPassword}
            />
          </div>
          <div className="check-box">
            <input type="checkbox" onClick={this.showPassword} id="check" />
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
}

export default LoginPage
