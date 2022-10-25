import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Row } from 'react-materialize';


export default function Header() {
    return (
        <Row>

            <Navbar className="teal darken-3" id="mobile-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="contact">Contato</NavLink></li>
            </Navbar>

        </Row>
    );
}