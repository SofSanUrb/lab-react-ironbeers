import React from 'react'
import Nav_Bar from './Nav_Bar.js'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Beers(props) {
    const {beers, onSearch} = props
    
    return (
        <div>
            <Nav_Bar/>
            <Container>
                <label>Search</label>
                <input onChange={onSearch} placeholder="Name of the beer"/>

            {
               beers.map((singleBeer) => {
                   return(
                       <Row className="singlebeer" key={singleBeer._id}>
                            <Col><img className="beerlistImg" src={singleBeer.image_url} alt="beer-logo"/></Col>
                            <Col className="beerInfo">
                                <h3><Link to={`/beers/${singleBeer._id}`}>{singleBeer.name}</Link></h3>
                                <h5 className="text-grey">{singleBeer.tagline}</h5>
                                <p><strong>Created by: </strong>{singleBeer.contributed_by}</p>
                            </Col>
                       </Row>
                   )
               }) 
            }
            </Container>
           
        </div>
    )
}
export default Beers