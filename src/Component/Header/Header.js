import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logoImage from '../../images/CityRidersLogo.png';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header-section">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid mt-3 ml-5 mr-5">
                    <div className="header-logo">
                        <img src={logo} alt="logo" />
                        <div className="logo-image">
                            <img src={logoImage} alt="logoImage" />
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mr-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Destination</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    {
                        loggedInUser.email ?
                            <Link to="/search">{loggedInUser.name}</Link>
                            :
                            <Link to="/search">
                                <button type="button" className="btn btn-outline-danger">Log In</button>
                            </Link>
                    }
                    {
                        loggedInUser.email ?
                            <Link to="/search">
                                <button onClick={() => setLoggedInUser({})} type="button" className="btn btn-outline-danger">Log Out</button>
                            </Link>
                            : ''
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;