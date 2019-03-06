import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Button, Form, Message } from "semantic-ui-react"
import loginBackground from '../img/login_background.jpg'
import './Login.css';

class Profile extends Component {
    state = {
        username: this.props.currentUser.username,
        password: "",
        first: this.props.currentUser.first,
        last: this.props.currentUser.last,
        email: this.props.currentUser.email,
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
          		<div className="card profile-card">
          			<div className="card-header">
          				<h3>{this.state.username}</h3>
          			</div>
          			<div className="card-body">
                <Form
                        onSubmit={() => { this.props.handleUpdate(this.state.username, this.state.first, this.state.last, this.state.email, this.state.blogname, this.state.blogdescription, this.state.id) }}
                        size="mini"
                        key="mini"
                        loading={this.props.authenticatingUser}
                        error={this.props.failedLogin}
                    >
                        <Message error header={this.props.failedLogin ? this.props.error : null} />
                        <Form.Group widths="equal">
                            <Form.Input
                                placeholder="first name"
                                name="first"
                                onChange={this.handleChange}
                                value={this.state.first}
                            />
                            <Form.Input
                                placeholder="last name"
                                name="last"
                                onChange={this.handleChange}
                                value={this.state.last}
                            />
                            <Form.Input
                                placeholder="e-mail"
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            <Form.Input
                                placeholder="blog name"
                                name="blogname"
                                onChange={this.handleChange}
                                value={this.state.blogname}
                            />
                            <Form.TextArea
                                placeholder="blog description"
                                name="blogdescription"
                                onChange={this.handleChange}
                                value={this.state.blogdescription}
                            />
                        </Form.Group>
                    <Button type="submit" className="btn float-right login_btn">Update</Button>
          				</Form>
          			</div>
          		</div>
          	</div>
          </div>
        </div>
        )
    }
}

export default withRouter(Profile)
