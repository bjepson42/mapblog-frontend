import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


const TOKEN = "pk.eyJ1IjoiYmplcHNvbiIsImEiOiJjanNmYThlOWYwcXJlNDlzN3d4bWpodXVuIn0.4Ziy3hzMAc275G33scZjNg"
const GTOKEN = "AIzaSyA3inP1j57jSJe-CsU8Nbo2-boaUjiifns"


const mapStyle = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "saturation": 36
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 40
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 18
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 19
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
    ]
  }
]


class Map extends Component {
  render() {
    const GoogleMapWindow = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
        defaultOptions={{ styles: mapStyle}}
      >
        <Marker position={{ lat: 40.756795, lng: -73.954298 }} />
        <Marker position={{ lat: 40.75, lng: -73.95 }} />
        <Marker position={{ lat: 40.758, lng: -73.955 }} />
        <Marker position={{ lat: 40.754, lng: -73.954 }} />
      </GoogleMap>
    ));
    return (
      <div className="col-md-8 map-container">
        <GoogleMapWindow
          containerElement={<div style={{ height: '94vh', width: '75vw' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
};
export default Map;