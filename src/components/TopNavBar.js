import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

class TopNavBar extends Component {
render(){
  return (
        <div className="container-fullwidth">
            <Navbar bg="light" expand="lg" className="navbar navbar-default">
                <Navbar.Brand href="#home">Trovolog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {this.props.currentUser ?
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#link">My Blog</Nav.Link>
                    <Nav.Link href="#link">Messages</Nav.Link>
                    <Nav.Link onClick={this.props.handleNewPost}>New Post</Nav.Link>
                    <NavDropdown title="Options" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">My Blog</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.props.handleNewPost}>New Post</NavDropdown.Item>
                        <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Messages</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="">logout</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <button onClick={this.props.handleLogout}>Logout</button>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                : null }
            </Navbar>
        </div>
  )
}



}

export default TopNavBar
