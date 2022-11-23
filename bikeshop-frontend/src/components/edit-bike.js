import React, {Component} from "react";
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class EditBike extends Component {
    constructor(props) {
        console.log('called the edit constructor')
        super(props);

        this.state = {
            make: '',
            model: '',
            price: '',
            type: '',
            available: false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.state = {
            make: '',
            model: '',
            price: '',
            type: '',
            available:false
        }
    }

    componentDidMount() {
        // Connect to the database
        console.log('Connecting to the database for the edit... ')
        console.log('Connecting to: http://127.0.0.1:4000/' + this.props.id)
        axios.get('http://127.0.0.1:4000/' + this.props.id)
        .then(response => {
              this.setState({
                make: response.data.make,
                model: response.data.model,
                price: response.data.price,
                type: response.data.make,
                available: response.data.available
              })
        })

        .catch(function (error) {
            console.log(error);
        })
        console.log('Finished getting the data for the edit')
    }

    onChangeMake(e) {
        e.preventDefault();
        this.setValue({make: e.target.value})
    }
    onChangeModel(e) {
        e.preventDefault();
        this.setValue({model: e.target.value})
    }
    onChangePrice(e) {
        e.preventDefault();
        this.setValue({price: e.target.value})
    }
    onChangeType(e) {
        e.preventDefault();
        this.setValue({type: e.target.value})
    }
 

    onSubmit(e)
    {
        e.preventDefault();
        console.log('Called onSubmit for the edit')
        alert('edit1')
        const obj = {   
            make: this.state.make,
            model: this.state.model,
            price: this.state.price,
            type: this.state.type,
            available: false /*this.state.available*/,
        }
        axios.post('http://127.0.0.1:4000/update' + this.props.id, obj)
            .then(res => console.log(res.data))

 //       this.props.history.push('/')
    }

    render ()
    {
        console.log('called EditBike')

        return (
            <div>
                <h3>Update Bike</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="Form" >
                        <Form.Control type="text" name="make" value={this.state.make} onChange={this.onChangeMake}/>
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="Form" >
                    <Form.Control type="text" name="model" value={this.state.model} onChange={this.onChangeModel}/>
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="Form" >
                        <Form.Control type="number" name="price" value={this.state.price} onChange={this.onChangePrice}/>
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="Form" >
                        <Form.Control type="text" name="type" value={this.state.type} onChange={this.onChangeType}/>
                    </Form.Group> 
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default EditBike;
