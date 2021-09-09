import React from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import './Navbar.css'


const NavBar = ({ isAuth, login, logout }) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <div style={{ display: 'flex' }}>
                    <Navbar.Brand >API</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink exact to="/" className="appLink" activeClassName="activeLink">Home</NavLink>
                        <NavLink to="/users" className="appLink" activeClassName="activeLink">Users</NavLink>
                        <NavLink to="/admin" className="appLink" activeClassName="activeLink">Admin</NavLink>
                    </Nav>
                </div>
                <Form inline>
                    <Button variant="outline-info" className="loginBtn"
                        onClick={() => isAuth ? logout() : login()}
                    >{isAuth ? "Logout" : "Login"}</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar
