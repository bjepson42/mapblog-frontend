import React, { Component } from 'react';
import './App.css';
import TopNavBar from './components/TopNavBar'
import Body from './components/Body'



class App extends Component {
  state = {
    currentUser: null,
    posts: [],
    locations: []
  }

  render() {
    return (
      <div className="App">
        <TopNavBar postData={this.state.posts} currentUser={this.state.currentUser} />
       
          <Body postData={this.state.posts} currentUser={this.state.currentUser}/>
 
      </div>
    );
  }
}

export default App;
