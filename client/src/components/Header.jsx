/* This is the header or top bar component.  It is pretty static. 
 * Includes navigatin links- App logo Title  2. link to "To-Read" list, 
 * 3. "Explore Books" (new book suggestion), 4. Logout button.
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { NavLink } from "react-router-dom";

function Header() {
    return (
       <nav />
    );
}

export default Header;
