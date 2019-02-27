import React, { Component } from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar'
import Body from './components/Body'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import NewPost from './components/NewPost'
import { Modal, Button } from 'react-bootstrap'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'


const API = 'http://localhost:3000/'

class App extends Component {
  constructor(){
    super()
    // localStorage.clear()
    this.state = {
      currentUser: null,
      posts: [],
      locations: [],
      users: [],
      loading: true
    }
}

  componentDidMount(){
    this.fetchData("users")
    this.fetchData("posts")
    this.fetchData("locations")

    let token = localStorage.getItem('token')
    if(token){
      fetch(API+'profile', {
        method: "GET",
        headers: {
          "Authentication": `Bearer ${token}`
        }
      }).then(res => res.json())
      .then(data => {
        this.setState({
          currentUser: data,
          loading: false
        })
      })
    } else {
      this.setState({loading: false})
    }
  }

  handleLogin = (username, password) => {
    fetch(API + 'login',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log(data)
          alert('Incorrect username/password combination')
        } else {
          this.setState({
            currentUser: data.user
          })
          localStorage.setItem("token", data.token)
        }
      })
  }

  handleSignup = (username, password, email, blogname ) => {
    fetch(API + 'signup',
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email: email,
          blogname: blogname
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log(data)
          alert('Something broke, whats going on?')
        } else {
          this.setState({
            currentUser: data.user
          })
          localStorage.setItem("token", data.token)
        }
      })
  }

  handleNewPost = () => {
      return(
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
      )
  }

  handleUpdate = (username, first, last, email, blogname, blogdescription, id) => {
    fetch(API + 'profile',
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          username: username,
          first: first,
          last: last,
          email: email,
          blogname: blogname,
          blogdescription: blogdescription,
          id: id
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          console.log(data)
          alert('Something broke, whats going on?')
        } else {
          this.setState({
            currentUser: data.user
          })
          localStorage.setItem("token", data.token)
        }
      })
  }


  handleLogout = () => {
    console.log("clear local storage", this.localStorage)
    this.setState({
      currentUser: null
    })
    localStorage.clear()
  }

  fetchData(dataType){
    fetch(API + `${dataType}`)
    .then(res => res.json())
    .then(data => {
      let key = dataType
      let val = data
      let obj = {}
      obj[key] = val
      this.setState(obj)
    })
  }

  render() {
    return (
      <div className="App">
          <TopNavBar  postData={this.state.posts}
                      currentUser={this.state.currentUser}
                      handleLogout={this.handleLogout}
                      handleNewPost={this.handleNewPost}
                      />

          {!this.state.loading ?
          <Switch>

            <Route exact path="/" render={() => {
              return this.state.currentUser ?
                <Body locationData={this.state.locations}
                  postData={this.state.posts}
                  currentUser={this.state.currentUser}
                  userData={this.state.users}
                /> : <Redirect to='/login' />
            }}
            />

            <Route exact path="/login" render={() => {
              console.log("user data", this.state.users)
              return this.state.currentUser ?
                <Body locationData={this.state.locations}
                  postData={this.state.posts}
                  currentUser={this.state.currentUser}
                  userData={this.state.users}
                /> : <Login onLogin={this.handleLogin}
                            handleLogout={this.handleLogout} />
            }} />

            <Route exact path="/signup" render={() => {
              return this.state.currentUser ?
                <Body locationData={this.state.locations}
                  postData={this.state.posts}
                  currentUser={this.state.currentUser}
                  userData={this.state.users}
                /> : <Signup onSignup={this.handleSignup}
                            handleLogout={this.handleLogout} />
            }} />

            <Route exact path="/profile" render={() => {
              return this.state.currentUser ?
              <Profile  currentUser={this.state.currentUser}
                        userData={this.state.users}
                        handleUpdate={this.handleUpdate}
              /> : <Login   onLogin={this.handleLogin}
                            handleLogout={this.handleLogout} />
            }} />

            <Route component={NotFound} />

          </Switch> : null }
      </div>
    );
  }
}

export default withRouter(App);
