import React from 'react';

import styles from './Nav.css'
import { NavLink } from 'react-router-dom';

const links = [
    {
        title: "Register",
        destination: "/register",
    },
    {
        title: "Login",
        destination: "/login",
    },
    {
        title: "Home",
        destination: "/home",
    }
]

export default function Nav() {
    const linkElements = links.map((link, index) =>
        <li key={index}>
            <NavLink to={link.destination} activeClassName={styles.active}>
                {link.title}
            </NavLink>
        </li>
    ); 
    return (
        <div className="container">
            <nav>
                <ul>
                    {linkElements}
                </ul>
            </nav>
        </div>
    )
};