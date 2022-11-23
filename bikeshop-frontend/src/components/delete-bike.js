import React, {Component} from "react";
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FloatingLabel } from "react-bootstrap";
import database from '../App'


class DeleteBike extends Component {
    constructor(props)
    {
        this.handleSubmit = this.handleSubmit.bind(this);      
    }

    handleSubmit(e)
    {
        e.preventDefault();
      // Does the name make a difference? Doesn't seem to. I can change it to anything 
        console.log('Posting to '+ 'http://127.0.0.1:4000/my_new_db_457/')
        axios.post('http://127.0.0.1:4000/my_new_db_457/' + "delete/",)
        .then(res => console.log(res.data));
    }
}