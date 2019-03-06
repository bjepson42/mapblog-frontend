import React, { Component } from 'react'
import { Carousel, Modal, Button } from 'react-bootstrap'

class SideBarCard extends Component {
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
        this.setState({ show: true });
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        const { index, direction } = this.state;
        return (
            <div className="card">
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                >

                { this.props.userData.posts[0] ?
                    this.props.userData.posts[0].pictures.map(picture => {
                      return (<Carousel.Item>
                          <img className="d-block w-100" src={picture.url} alt="First slide" />
                      </Carousel.Item>)
                  }) : null
                }

                </Carousel>
                <div className="card-body">
                    <h5 className="card-title">{this.props.userData.username} - {this.props.userData.blogname}</h5>
                    <p className="card-text">{this.props.userData.blogdescription}</p>
                    <a onClick={this.handleShow} className="btn btn-primary modalButton">View Blog</a>
                    <a href={"mailto:" + this.props.email} className="btn btn-primary modalButton">Send Message</a>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.userData.blogname}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.userData.blogdescription}</Modal.Body>
                    { this.props.userData.posts[0] ?
                        this.props.userData.posts.map(post => {
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

export default SideBarCard
