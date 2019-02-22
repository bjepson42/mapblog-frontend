import React, { Component } from 'react'
import MapGL, { NavigationControl } from 'react-map-gl';
import ReactMapboxGL, { Layer, Feature } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = "pk.eyJ1IjoiYmplcHNvbiIsImEiOiJjanNmYThlOWYwcXJlNDlzN3d4bWpodXVuIn0.4Ziy3hzMAc275G33scZjNg"

const Map = ReactMapboxGL({
  accessToken: TOKEN
})

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}



  render(){
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
    )
  }

export default Map
