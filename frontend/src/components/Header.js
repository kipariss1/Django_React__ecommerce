import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    console.log("Logging out")
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
                      <a class="nav-link"><Link to="/cart"><i className='fas fa-shopping-cart'></i>Cart</Link></a>
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
                                  Dropdown
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                  <li><a class="dropdown-item" href="#">Action</a></li>
                                  <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      : 
                      <li className="nav-item">
                        <a class="nav-link"><Link to="/login"><i className='fas fa-user'></i>Login</Link></a>  
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
