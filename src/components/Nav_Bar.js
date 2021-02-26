import React, { Component } from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Nav_Bar extends Component {
    render() {
        return (
            <div>
                <Nav className="navbarBeers">
                    <Nav.Item>
                        <Link to="/"><img src="./food_bottle_empty.png" alt="bottle-logo"/></Link>
                    </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Nav_Bar