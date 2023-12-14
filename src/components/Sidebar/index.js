import './index.css'

const Sidebar = () => (
  <div className="sidebar-container">
    <p>Home</p>
    <p>Trending</p>
    <p>Games</p>
    <p>Saved videos</p>
    <div className="footer">
      <p className="contact">CONTACT US</p>
      <div className="social-media">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
          alt="facebook logo"
          className="media-icons"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
          className="media-icons"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
          className="media-icons"
        />
        <p className="sidebar-text">
          Enjoy! Now to see your channels and recommendations!
        </p>
      </div>
    </div>
  </div>
)

export default Sidebar
