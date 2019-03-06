import React, { Component } from 'react'
import { withRouter } from 'react-router'
// import { Dropdown, List, Button, Form, Message } from 'semantic-ui-react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

import loginBackground from '../img/login_background.jpg'
import './Login.css';

const options = [
{ key: 'angular', text: 'Angular', value: 'angular' },
{ key: 'css', text: 'CSS', value: 'css' },
{ key: 'design', text: 'Graphic Design', value: 'design' },
{ key: 'ember', text: 'Ember', value: 'ember' },

]

class NewPost extends Component {
    state = {
        username: this.props.currentUser.username,
        first: this.props.currentUser.first,
        last: this.props.currentUser.last,
        blogname: this.props.currentUser.blogname,
        blogdescription: this.props.currentUser.blogdescription,
        id: this.props.currentUser.id
    }

    handleChange = (event, { name, value }) => {
        console.log("handle change", name, value)
        this.setState({
            [name]: value
        })
    }



    render() {
        return (
          <div className="login">
          <div className="container">
          	<div className="d-flex justify-content-center h-100">
          		<div className="card NewPost-card">
          			<div className="card-header">
          				<h3>{this.state.blogname}</h3>
          			</div>
          			<div className="card-body">
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Post</Form.Label>
                    <Form.Control placeholder="Post title" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                    {this.props.locationData.map(locationItem => {
                      return <option>{locationItem.name}</option>
                    })}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>BlogText</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>
                </Form>
          			</div>
          		</div>
          	</div>
          </div>
        </div>
        )
    }
}

export default withRouter(NewPost)
