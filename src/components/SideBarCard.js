import React, { Component } from 'react'
import image1 from '../img/Pic1.jpg'
import image2 from '../img/Pic2.jpg'
import image3 from '../img/Pic3.jpg'
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
            show: false
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
                    <Carousel.Item>
                        <img className="d-block w-100" src={image1} alt="First slide" />
                        <Carousel.Caption>
                            <p>First slide label</p>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image2} alt="Second slide" />
                        <Carousel.Caption>
                            <p>Second slide label</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image3} alt="Third slide" />

                        <Carousel.Caption>
                            <p>Third slide label</p>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="card-body">
                    <h5 className="card-title">{this.props.userData.username} - {this.props.userData.blogname}</h5>
                    <p className="card-text">{this.props.userData.blogdescription}</p>
                    <a onClick={this.handleShow} className="btn btn-primary modalButton">View</a>
                    <a href={"mailto:" + this.props.email} className="btn btn-primary modalButton">Send Message</a>
                </div>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.userData.blogname}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.userData.blogdescription}</Modal.Body>
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
