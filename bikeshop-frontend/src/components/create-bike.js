import React, {Component} from "react";
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class CreateBike extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            make: '',
            model: '',
            price: '',
            type: '',
            available: false
        }     

        this.handleSubmit = this.handleSubmit.bind(this);      
    }

    handleSubmit(e)
    {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          return;
        }
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const newBike = {
            make: data.make,
            model: data.model,
            price: data.price,
            type: data.type,
            available: (data.group1 === "on" ? true : false)
        }

        for (const pair of formData.entries()) {
            console.log(`${pair[0]}, ${pair[1]}`);
          }
          
        // Does the name make a difference? Doesn't seem to. I can change it to anything 
        console.log('Posting to http://127.0.0.1:4000/add/' + newBike)
        axios.post('http://127.0.0.1:4000/add/', newBike)
        .then(res => console.log(res.data));
/*
        this.setState({
            make: '',
            model: '',
            price: '',
            type: '',
            available:false
        })
*/
    }

    render ()
    {
        console.log('called CreateBike')

        return (
            <div style={{marginTop: 20}}>
                <Container fluid="md">
                <h3>Create New Bike</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="Form" >
                            <Form.Control type="text" name="make" placeholder="Make"/>
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="Form" >
                            <Form.Control type="text" name="model" placeholder="Model"/>
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="Form" >
                            <Form.Control type="number" name="price" placeholder="Price"/>
                        </Form.Group> 
                        <Form.Group className="mb-3" controlId="Form" >
                            <Form.Control type="text" name="type" placeholder="Type"/>
                         </Form.Group> 
                        <Form.Group className="mb-3" controlId="Form" >
                            Available?
                            <Form.Check inline label="Yes" name="group1" type='radio' id='radio-1' />
                            <Form.Check inline label="No" name="group1" type='radio' id='radio-2' />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                    </Container>

                    </div>
        )
    }
}

export default CreateBike;