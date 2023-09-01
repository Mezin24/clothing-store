import { ReactComponent as Logo } from 'assets/logo/crown.svg'
import { CartDropdown } from 'components/cartDropdown/CartDropdown'
import { CartIcon } from 'components/carticon/CartIcon'
import { memo, useCallback } from "react"
import { useSelector } from 'react-redux'
import { Outlet } from "react-router"
import { Link } from "react-router-dom"
import { getCartIsOpen } from 'store/cart/cart.selectors'
import { getCurrentUser } from 'store/user/user.selector'
import { authSignOut } from "utils/firebase/config"
import './layout.scss'

export const Layout = memo(() => {
  const currentUser = useSelector(getCurrentUser)
  const isOpen = useSelector(getCartIsOpen)

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
          <Link to='/shop' className="nav-link">Shop</Link>
          {currentUser ? 
            <span className="nav-link" onClick={signOutHandler}>Sign Out</span> 
            : (
              <Link to='/auth' className="nav-link">Sign In</Link>
            )
          }
          <CartIcon />
        </div>
        {isOpen && <CartDropdown/>}
      </header>
      <Outlet />
    </>
  )
})