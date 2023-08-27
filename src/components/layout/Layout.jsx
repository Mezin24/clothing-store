import { ReactComponent as Logo } from 'assets/logo/crown.svg'
import { UserContext } from "context/userContext/UserContext"
import { useCallback, useContext } from "react"
import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import { authSignOut } from "utils/firebase/config"
import './layout.scss'

export const Layout = () => {
  const {user} = useContext(UserContext)
  console.log(user)

  const signOutHandler = useCallback(async() => {
    await authSignOut()
  }, [])
  
  return (
    <>
      <header className="navigation">
        <Link to='/' className="logo-container">
          <Logo/>
        </Link>
        <div className="nav-links-container">
          <Link to='/' className="nav-link">Home</Link>
          <Link to='/shop' className="nav-link">Shop</Link>
          {user ? 
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span> 
            : (
              <Link to='/auth' className="nav-link">Sign In</Link>
            )
          }
        </div>
      </header>
      <Outlet />
    </>
  )
}