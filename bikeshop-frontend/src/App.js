import './App.css';
import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import kenny from './kenny.jpg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import EditBikeWithId from './components/edit-bike-with-id';
//import DeleteBike from './components/edit-bike';
import CreateBike from './components/create-bike';
import BikesList from './components/list-bikes';
import axios from 'axios'

function myDeleteBike(bike)
{
  console.log('Called the deleteBike function: ');
  axios.get('http://127.0.0.1:4000/my_new_db_457/');
}

class App extends Component {
  render() {
    return (

        <Router>
          <Navbar>
            <Container>
              <Navbar.Brand href="https://www.edinburghbicycle.com/" >
                <img src={kenny} width="30" height="30" alt="Kenny" />
                <Link to="/" className="navbar-brand">BikeBase</Link>
              </Navbar.Brand>
              <Nav.Item>
                <Nav.Link href="/">Bikes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav.Item>
            </Container>
          </Navbar>

          <Container>
            <Routes>
              <Route path="/" element={<BikesList />} />
              <Route path="/edit/:id" element={<EditBikeWithId />} />
              <Route path="/create" element={<CreateBike />} />
              <Route path="/delete/:id" element={<myDeleteBike />} />
            </Routes>
          </Container>
        </Router>

    );
  }
}

export default App;

