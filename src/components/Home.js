import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <div className="homePage">
            <Card className="container" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./beers.png" />
                <Card.Body>
                    <Link to="/beers">
                        <Card.Title>All beers</Card.Title>
                    </Link>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="container" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./random-beer.png" />
                <Card.Body>
                    <Link to="/random-beer">
                        <Card.Title>Random beers</Card.Title>
                    </Link>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="container" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./new-beer.png" />
                <Card.Body>
                    <Link to="/new-beer">
                        <Card.Title>Add a New beer</Card.Title>
                    </Link>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default Home