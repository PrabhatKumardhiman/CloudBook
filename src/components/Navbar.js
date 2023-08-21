import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

    let navigateto = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigateto('/login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        CloudBook
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    About
                                </Link>
                            </li>
                        </ul>
                        { !localStorage.getItem('token') ? <form className="d-flex">
                        <Link  className= {`btn btn-outline-light ${props.display} me-3`} to="/login" role="button">Login</Link>
                        <Link className={`btn btn-outline-light ${props.displaysignup}`} to="/signup" role="button">Signup</Link>
                        </form> : <button className="btn btn-outline-light" onClick = {handleLogout}>Logout</button> }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
