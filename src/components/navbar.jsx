import React from 'react';

function Navbar() {
    var username = sessionStorage.getItem('username');
    
    function history(username) {
        if (username !== null) {
            return (
                <form class="d-flex">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href='/logout'>Sign Out</a>
                    </li>
                </ul>
                </form>
            );
        }

        else {
            return (
                <form class="d-flex">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/login">Sign In</a>
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
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <img src={require('../assets/aloha.png')} alt="..." class='navbar_brand' />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/browse">Browse</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Use Cases</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Retain & Re-engage</a></li>
                                <li><a class="dropdown-item" href="#">Connect & Communicate</a></li>
                                <li><a class="dropdown-item" href="#">Rebuild & Re-align</a></li>
                                <li><a class="dropdown-item" href="#">Creative Learning</a></li>
                                <li><a class="dropdown-item" href="#">Performance Booster</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Corporate Subscriptions</a>
                        </li>
                    </ul>
                    {history(username)}
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;