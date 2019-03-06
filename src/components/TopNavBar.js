import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, Modal } from 'react-bootstrap'


class TopNavBar extends Component {

  constructor(props, context) {
      super(props, context);
      this.handleSelect = this.handleSelect.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.state = {
          index: 0,
          direction: null,
          show: false,
          showImageDescription: false
      };
  }

  handleClose() {
      this.setState({ show: false });
  }

  handleShow() {
      console.log("SHOW ME")
      this.setState({ show: true });
  }

  handleSelect(selectedIndex, e) {
      this.setState({
          index: selectedIndex,
          direction: e.direction,
      });
  }

render(){
  const { index, direction } = this.state;
  return (
        <div className="container-fullwidth">
            <Navbar bg="light" expand="lg" className="navbar navbar-default">
                <Navbar.Brand href="#home">Trovolog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {this.props.currentUser ?
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link onClick={this.handleShow}>My Blog</Nav.Link>
                    <Nav.Link href="#link">Messages</Nav.Link>
                    <Nav.Link href="/newpost">New Post</Nav.Link>
                    <NavDropdown title="Options" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">My Blog</NavDropdown.Item>
                        <NavDropdown.Item href="/newpost">New Post</NavDropdown.Item>
                        <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.4">Messages</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={this.props.handleLogout}>Logout</NavDropdown.Item>
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
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.currentUser ? this.props.currentUser.blogname : null}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.currentUser ? this.props.currentUser.blogdescription : null}</Modal.Body>
                { this.props.currentUser && this.props.currentUser.posts ?
                    this.props.currentUser.posts.map(post => {
                      return (
                        <Modal.Body>
                          <Carousel
                              activeIndex={index}
                              direction={direction}
                              onSelect={this.handleSelect}
                          >

                          { post.pictures ?
                              post.pictures.map(picture => {
                                return (<Carousel.Item>
                                    <img className="d-block w-100" src={picture.url} alt="First slide" />
                                </Carousel.Item>)
                            }) : null
                          }

                          </Carousel>
                        {post.name} - {post.location.name} - {post.body}
                        </Modal.Body>



                      )
                  }) : null
                }

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Comment
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

  )
}



}

export default TopNavBar
