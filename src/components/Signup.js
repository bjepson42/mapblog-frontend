import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Button, Form, Message } from "semantic-ui-react"
import loginBackground from '../img/login_background.jpg'
import './Login.css';

class Signup extends Component {
    state = {
        username: "",
        password: "",
        email: "",
        blogname: ""
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
          		<div className="card signup-card">
          			<div className="card-header">
          				<h3>Sign Up</h3>
          			</div>
          			<div className="card-body">
                <Form
                        onSubmit={() => { this.props.onSignup(this.state.username, this.state.password, this.state.email, this.state.blogname) }}
                        size="mini"
                        key="mini"
                        loading={this.props.authenticatingUser}
                        error={this.props.failedLogin}
                    >
                        <Message error header={this.props.failedLogin ? this.props.error : null} />
                        <Form.Group widths="equal">
                            <Form.Input
                                placeholder="username"
                                name="username"
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                            <Form.Input
                                placeholder="password"
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                value={this.state.password}
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
                        </Form.Group>
                    <Button type="submit" className="btn float-right login_btn">Sign Up</Button>
          				</Form>
          			</div>
          			<div className="card-footer">
          				<div className="d-flex justify-content-center links">
          					Already have an account?<a href="/login">Login</a>
          				</div>
          			</div>
          		</div>
          	</div>
          </div>
        </div>
        )
    }
}

export default withRouter(Signup)
