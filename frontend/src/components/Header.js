import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
      <header>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">Pro shop</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to="/cart" className="nav-link"><i className='fas fa-shopping-cart'></i>Cart</Link>
                    </li>
                    {userInfo ?
                      <li className="nav-item">
                        <div class="container-fluid">
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul class="navbar-nav">
                              <li class="nav-item dropdown">
                                <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                  {userInfo.name}
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                  <li><Link to='/profile' className='dropdown-item'>Profile</Link></li>
                                  <li onClick={logoutHandler}><Link className="dropdown-item">Logout</Link></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      : 
                      <li className="nav-item">
                        <Link to="/login" className="nav-link"><i className='fas fa-user'></i>Login</Link>  
                      </li>
                    }
                </ul>
              </div>
            </div>
        </nav>
      </header>
  )
}

export default Header
