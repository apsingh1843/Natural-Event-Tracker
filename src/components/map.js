import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../keys';

const Map = ({center, zoom}) => {
  return(
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_MAP_API_KEY}}
        defaultCenter= { center }
        defaultZoom= { zoom }
      >

      </GoogleMapReact>
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 22.56263,
    lng: 88.36304
  },
  zoom: 6
}

export default Map;
