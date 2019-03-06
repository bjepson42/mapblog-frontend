import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Button, Form, Message } from "semantic-ui-react"
import loginBackground from '../img/login_background.jpg'

class Login extends Component {
    state = {
        username: "",
        password: ""
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
          		<div className="card login-card">
          			<div className="card-header">
          				<h3>Sign In</h3>
          			</div>
          			<div className="card-body">
                <Form
                        onSubmit={() => { this.props.onLogin(this.state.username, this.state.password) }}
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
                        </Form.Group>
                    <Button type="submit" className="btn float-right login_btn">Login</Button>
          				</Form>
          			</div>
          			<div className="card-footer">
          				<div className="d-flex justify-content-center links">
          					Don't have an account?<a href="/signup">Sign Up</a>
          				</div>
          			</div>
          		</div>
          	</div>
          </div>
        </div>
        )
    }
}

export default withRouter(Login)
