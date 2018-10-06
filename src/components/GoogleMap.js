import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

export default withScriptjs(withGoogleMap(props => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{lat: props.coord.lat, lng: props.coord.lon}}
    />
  )}
));