import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class ModalBlog extends Component {
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
        return (
          <div>
            texty text text
          </div>
        )
    }



}

export default ModalBlog
