import React, { Component } from 'react'
import PropTypes from "prop-types";

const Navbar = ({title, icon})  => {

    return (
        <nav className="bg-primary">
            <h1><i className={icon}></i> {title}</h1>
        </nav>
    )

}

Navbar.defaultProps = {
    title: "GitHub Finder",
    icon: "fab fa-github"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default Navbar
