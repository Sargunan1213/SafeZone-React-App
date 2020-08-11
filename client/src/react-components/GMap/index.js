import React from "react";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import "./styles.css";
import { uid } from "react-uid";

class GMap extends React.Component {
  state = {};

  render() {
    const homes = this.props.houses;
    console.log(homes);
    const OurMap = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap
          defaultZoom={13}
          defaultCenter={{
            lat: 43.6532,
            lng: -79.3832,
          }}
        >
          {/* InfoWindow on top of marker */}

          {/*Marker*/}

          {homes.map((home) => (
            <Marker
              position={{
                lat: home.lat,
                lng: home.lng,
              }}
            />
          ))}
        </GoogleMap>
      ))
    );

    return (
      <div className="top">
        <OurMap
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDafA5UtBCrm82XQq7rttPuGssjPHfUqfI"
          }
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default GMap;
