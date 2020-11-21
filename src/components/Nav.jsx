import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Message from './Message';
import Rendu from './Rendu';
import Menu from '../styles/Menu'

function Nav(props) {
    return (
        <Router>
            <Menu>
                <p><Link to="/message">Message</Link></p>
                <p><Link to="/rendu">Rendu</Link></p>
            </Menu>
                <Route path="/message" component={Message}></Route>
                <Route path="/rendu" component={Rendu}></Route>
        </Router>
    );
}

export default Nav;