import React, { Component } from 'react'
import SideBarCard from './SideBarCard'



class SideBar extends Component{
  render(){
    console.log("userData", this.props.userData)
    return (
          <div className="col-md-4 sidebar">
            {this.props.userData.map(user => {
              return <SideBarCard userData={user}/>
            })}
          </div>
    )
  }
}

export default SideBar
