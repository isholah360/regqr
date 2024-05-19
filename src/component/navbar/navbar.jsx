import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className="navys">
        <div className="logo">QRCODE FORN</div>
        <div className="uls">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/gui"><li>Gui</li></Link>
                <Link to="/register"><li>Register</li></Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
