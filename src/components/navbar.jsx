import React from 'react';

function Navbar() {
    var username = sessionStorage.getItem('username');
    
    function history(username) {
        if (username !== null) {
            return (
                <form className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href='/logout'>Sign Out</a>
                    </li>
                </ul>
                </form>
            );
        }

        else {
            return (
                <form className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/login">Sign In</a>
                        </li>
                    </ul>
                </form>
            );
        }
    }

    if (window.location.href.includes('/checkout')) {
        // hide navbar when in checkout page
        return (
            <div>
            </div>
        );
    }

    if (window.location.href.includes('/stripe')) {
        // hide navbar when in stripe page
        return (
            <div>
            </div>
        );
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <img src={require('../assets/aloha.png')} alt="..." className='navbar_brand' />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/browse">Browse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="...">About</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Use Cases</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Retain & Re-engage</a></li>
                                <li><a className="dropdown-item" href="#">Connect & Communicate</a></li>
                                <li><a className="dropdown-item" href="#">Rebuild & Re-align</a></li>
                                <li><a className="dropdown-item" href="#">Creative Learning</a></li>
                                <li><a className="dropdown-item" href="#">Performance Booster</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Corporate Subscriptions</a>
                        </li> */}
                    </ul>
                    {history(username)}
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;