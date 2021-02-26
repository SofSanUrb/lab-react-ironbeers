import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav_Bar from './Nav_Bar.js'
import { Container, Col, Row } from 'react-bootstrap'

function RandomBeer(props) {
    const [beer, setBeer] = useState({})
    // Mounting
    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response) => {
            setBeer(response.data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <Nav_Bar/>
            <Container>
                <img className="beerlistImg detailimage" src={beer.image_url} alt="beer-logo"/>
                <Row>
                    <Col><h3>{beer.name}</h3></Col>
                    <Col><h3 className="text-grey">{beer.attenuation_level}</h3></Col>
                </Row>
                <Row>
                    <Col><h5 className="text-grey">{beer.tagline}</h5></Col>
                    <Col><h6>{beer.first_brewed}</h6></Col>
                </Row>
                <div>{beer.description}</div>
                <div className="text-grey">{beer.contributed_by}</div>
            </Container>
            
        </div>
    )
}
export default RandomBeer