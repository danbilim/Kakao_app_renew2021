import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import "./Navigation.scss"

function Navigation() {
    return (
        <nav className="tab-bar">
            <NavLink to="/">
                <i className="fas fa-user"></i>
                <span className="tab_name">Friends</span>
            </NavLink>
            <NavLink to="/chats">
                <i className="fas fa-comment"></i>
                <span className="tab_name">Chats</span>
            </NavLink>
            <NavLink to="/find">
                <i className="fas fa-search"></i>
                <span className="tab_name">Find</span>
            </NavLink>
            <NavLink to="/more">
                <i className="fas fa-ellipsis-h"></i>
                <span className="tab_name">More</span>
            </NavLink>
        </nav>
    )
}

export default Navigation;