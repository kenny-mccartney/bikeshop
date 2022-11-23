import React, {Component} from "react";
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav'


const Bike = props => (
    <tr>
        <td className ={(props.bike.available ? '' : 'outofstock')}>{props.bike.make}</td>
        <td className ={(props.bike.available ? '' : 'outofstock')}>{props.bike.model}</td>
        <td className ={(props.bike.available ? '' : 'outofstock')}>{props.bike.price}</td>
        <td className ={(props.bike.available ? '' : 'outofstock')}>{props.bike.type}</td>
        <td className ={(props.bike.available ? '' : 'outofstock')}>{props.bike.available}</td>
        <td>
            <Nav.Item>
              <Nav.Link href={"/edit/"+props.bike._id}>Edit</Nav.Link>
              <Nav.Link href={"/delete/"+props.bike._id}>Delete</Nav.Link>
            </Nav.Item>
        </td>
    </tr>
)


class BikesList extends Component {
    constructor(props) {
        super(props);
        this.state = {bikes: []};
    }


    componentDidMount() {
        // Connect to the backend. Will fetch all entries. See bikeRoutes.route('/') in server.js
        axios.get('http://127.0.0.1:4000/')
        .then(response => {
            this.setState({bikes: response.data})   
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    listBikes()
    {
        return this.state.bikes.map(function(current, i) {
            return <Bike bike={current} key={i} />
        })
    }

    render ()
    {
        //alert('called bikeslist')
        console.log('called bikeslist');
        return (
            <div>
                <h3>Bikes</h3>
                <Table className="table table-striped" style={{ margin: 20 }}>
                    <thead>
                        <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Available</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listBikes()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default BikesList;