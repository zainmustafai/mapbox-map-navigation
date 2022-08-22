import React, { useState } from 'react'
import Map, { Marker, NavigationControl } from 'react-map-gl'; // MAP GL API
import 'mapbox-gl/dist/mapbox-gl.css';

// API TOKEN MUST BE in .env file
const API_TOKEN = 'pk.eyJ1IjoiemZvcnphaW4yMDAwIiwiYSI6ImNsNzJhMDl0OTBveHEzcHA4eGhhc2R6N2gifQ.dIl45n-p-HHWJiyThecddg';

const MapBox = ({longitude,latitude, places}) => {
    const [lon, setLon]=useState(longitude);
    const [lat,setLat]=useState(latitude);    
    
  const [viewState, setViewState] = React.useState({
    longitude: lon,
    latitude: lat,
    zoom: 14
  });

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={API_TOKEN}
      style={{width: '100%', height: '60vh'}}
      >
        <Marker
        longitude={lon}
        latitude={lat}
        />
        
        <NavigationControl
        position='bottom-right'
        />
    </Map>
  )
}

export default MapBox