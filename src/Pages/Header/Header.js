import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            {/* notice part */}
            <div className="bg-primary opacity-75 py-1">
                <h5 className="text-center text-white fw-bold">Due to Covid situation, Delivery can take some extra time</h5>
            </div>

            {/* navbar part */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <NavLink className="navbar-brand me-5" to="/home"><h3 className="fw-bolder text-warning logo">e-<span className="text-primary opacity-75">sixteen</span></h3></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-5" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/shop">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary opacity-75 rounded-pill mt-1 me-2">Sign In</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-primary opacity-75 rounded-pill mt-1">Sign Up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* mobile version */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white mobile-nav sticky-top">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2 rounded-pill w-auto" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary opacity-75 rounded-pill" type="submit">Search</button>
                    </form>
                    <button className="border-0 bg-white ms-auto mt-2"><i class="fas fa-shopping-cart text-primary opacity-75 fs-3"><sup className="ms-1 fs-4 text-primary">0</sup></i></button>
                </div>
            </nav>

            {/* semi nav part
            <nav className="navbar navbar-light bg-white mobile-nav">
                <div className="container-fluid">
                    <form className="d-flex m-auto">
                        <input className="form-control me-2 rounded-pill w-auto" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary opacity-75 rounded-pill" type="submit">Search</button>
                    </form>
                </div>
            </nav> */}

            {/* semi nav part */}
            <nav className="navbar navbar-light bg-white mobile-nav">
                <div className="container-fluid">
                    <div className="dropdown">
                        <button className="btn btn-primary opacity-75 dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </button>
                        <ul className="dropdown-menu categories shadow-lg border-0 p-2" aria-labelledby="dropdownMenuButton1">
                            <li><NavLink className="dropdown-item mb-2 bg-white text-primary opacity-75 fw-bold" to="/">Action</NavLink></li>
                            <li><NavLink className="dropdown-item mb-2 bg-white text-primary opacity-75 fw-bold" to="/">Another action</NavLink></li>
                            <li><NavLink className="dropdown-item mb-2 bg-white text-primary opacity-75 fw-bold" to="/">Something else here</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* semi nav part
            <nav className="navbar navbar-light bg-white sticky-top cart-icon mobile-nav">
                <div className="container-fluid">
                    <button className="border-0 bg-white ms-auto mt-1"><i class="fas fa-shopping-cart text-primary opacity-75 fs-3"><sup className="ms-1 fs-4 text-primary">0</sup></i></button>
                </div>
            </nav> */}

            {/* desktop version */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white desktop-nav sticky-top">
                <div className="container-fluid">
                    <div className="dropdown me-5">
                        <button className="btn btn-primary opacity-75 dropdown-toggle rounded-pill" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Categories
                        </button>
                        <ul className="dropdown-menu categories shadow-lg border-0 p-2" aria-labelledby="dropdownMenuButton1">
                            <li><NavLink className="dropdown-item mb-2 bg-white text-primary opacity-75 fw-bold" to="/">Action</NavLink></li>
                            <li><NavLink className="dropdown-item mb-2 bg-white text-primary opacity-75 fw-bold" to="/">Another action</NavLink></li>
                            <li><NavLink className="dropdown-item mb-2 bg-white text-primary opacity-75 fw-bold" to="/">Something else here</NavLink></li>
                        </ul>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-5">
                            <input className="form-control me-2 rounded-pill w-auto" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary opacity-75 rounded-pill" type="submit">Search</button>
                        </form>
                        <button className="border-0 bg-white ms-auto mt-1"><i class="fas fa-shopping-cart text-primary opacity-75 fs-3"><sup className="ms-1 fs-4 text-primary">0</sup></i></button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;