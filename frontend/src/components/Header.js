import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

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
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {userInfo.name}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Another action</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Something else here</a>
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
