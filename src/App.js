import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import './App.css'

// Replace your code here
const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
