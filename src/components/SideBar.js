import React, { Component } from 'react'
import SideBarCard from './SideBarCard'

class SideBar extends Component {
render(){
  return (
        <div className="col-md-4 sidebar">
          <SideBarCard />
          <SideBarCard />
          <SideBarCard />
          <SideBarCard />
          <SideBarCard />
          <SideBarCard />
          <SideBarCard />
        </div>
  )
}



}

export default SideBar