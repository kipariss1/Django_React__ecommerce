import React from 'react'

function Header() {
  return (
      <header>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Pro shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="/cart"><i className='fas fa-shopping-cart'></i>Cart</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/login"><i className='fas fa-user'></i>Login</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </header>
  )
}

export default Header
