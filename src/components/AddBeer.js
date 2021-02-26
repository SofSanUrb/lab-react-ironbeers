import React, { Component } from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import Nav_Bar from './Nav_Bar.js'

class AddBeer extends Component {
    render() {
        const {onSend} = this.props
        return (
            <div>
            <Nav_Bar/>
                
                <Container>
                <h2 className="App">Add a beer to the list!</h2>
                    <Form onSubmit={onSend}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tagline</Form.Label>
                            <Form.Control name="tagline" type="text" placeholder="Tagline"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" as="textarea" rows={3} placeholder="Description"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>First Brewed</Form.Label>
                            <Form.Control name="first_brewed" type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Brewer Tips</Form.Label>
                            <Form.Control name="brewers_tips" type="text"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Attenuation Level</Form.Label>
                            <Form.Control name="attenuation_level" type="number"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contributed By</Form.Label>
                            <Form.Control name="contributed_by" type="text"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
export default AddBeer