import Header from '../Header'
import Sidebar from '../Sidebar'
import './index.css'
import Movielist from '../Movielist'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div style={{display: 'flex'}}>
      <Sidebar />
      <Movielist />
    </div>
  </div>
)

export default Home
