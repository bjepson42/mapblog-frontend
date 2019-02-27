import React, { Component } from 'react'
import SideBar from './SideBar'
import Map from './Map'
class Body extends Component {
  state = {
    topTen: [],
    currentUserFavorites: [],
    currentPlaylist: [],
    currentSong: [],
  }

  render(){
    return (
          <div className="container body row">
              <SideBar userData={this.props.userData}/>
              <Map locationData={this.props.locationData}/>
          </div>
    )
  }
}

export default Body
