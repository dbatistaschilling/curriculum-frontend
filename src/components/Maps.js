import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

const MapWithAMarker = props => {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 41.1171, lng: 16.8719 }}
        >
        <Marker
            position={{ lat: 41.1171, lng: 16.8719 }}
        />
        </GoogleMap>
    );
};

export default withScriptjs(withGoogleMap(MapWithAMarker));

//       //   apiKey: 'AIzaSyBOQoUH07NCuMRL8ujR80uiUQPQnVAFfvg',
