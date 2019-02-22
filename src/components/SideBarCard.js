import React, { Component } from 'react'
import image1 from '../img/Pic1.jpg'
import image2 from '../img/Pic2.jpg'
import image3 from '../img/Pic3.jpg'
import { Carousel } from 'react-bootstrap'

class SideBarCard extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
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
                    <h5 className="card-title">Beau's Blog</h5>
                    <p className="card-text">My exploration and adventures travelling throughout the world!</p>
                    <a href="#" className="btn btn-primary">View</a>
                </div>
            </div>
        )
    }



}

export default SideBarCard