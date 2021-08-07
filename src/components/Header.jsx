import React from "react";

function Header()
{
    const navbar = 
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <div class="products">
                        <a class="navbar-brand" href="#">Products</a>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Collection</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Gifts</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our magazine</a>
                            </li>
                        </ul>
                        <i class="fas fa-search fa-2x icon"></i>
                        <span class="navbar-text">
                            Log In 
                        </span>
                    </div>
                </div>
            </nav>
            
    return ( navbar);
}

export default Header;


{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar w/ text</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Navbar text 
                    </span>
                </div>
            </div>
        </nav> */}