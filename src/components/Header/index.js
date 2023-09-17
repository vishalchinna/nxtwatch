import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt=""
          className="header-logo"
        />
        <ul className="profile-container">
          <li>D</li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile"
            />
          </li>
        </ul>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    )
  }
}

export default Header
