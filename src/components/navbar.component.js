import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component{

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <NavLink to="/" className="nav-link" activeClassName="active">User1</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/user2" className="nav-link" activeClassName="active">User2</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/user3" className="nav-link" activeClassName="active">User3</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/user4" className="nav-link" activeClassName="active">User4</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/user5" className="nav-link" activeClassName="active">Cities</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}