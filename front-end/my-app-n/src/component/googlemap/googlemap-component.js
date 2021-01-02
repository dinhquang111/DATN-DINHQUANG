import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'
import * as parksData from './data/skateboard-parks.json'
function Map() {
    return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 16.068490, lng: 108.189622}} >


        {parksData.features.map(park => (
            <Marker key={park.properties.PARK_ID}
                position={{
                    lat: park.geometry.coordinates[0],
                    lng: park.geometry.coordinates[1]
                }}
            />
        ))}
    </GoogleMap>
}
class googlemapComponent extends Component {

    render() {
        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDAtQMgdFhcle48AaHfnp6PvGeEAPY8zjw`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}
const WrappedMap = withScriptjs(withGoogleMap(Map))
const mapStateToProps = (store) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(googlemapComponent))