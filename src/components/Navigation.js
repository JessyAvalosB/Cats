import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-navigator sticky-top">
            <Link className="navbar-brand" to="/">
                Cats
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse rotate-text" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/gallery">
                            Gallery
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/news">
                            News
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
