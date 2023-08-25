import { Outlet } from "react-router"
import './layout.scss'
import { Link } from "react-router-dom"
import {ReactComponent as Logo} from 'assets/logo/crown.svg'

export const Layout = () => {
  return (
    <>
      <header className="navigation">
        <Link to='/' className="logo-container">
          <Logo/>
        </Link>
        <div className="nav-links-container">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/shop' className="nav-link">Shop</Link>
        </div>
      </header>
      <Outlet />
    </>
  )
}