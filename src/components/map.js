import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../keys';
import LocationTracker from './locationTracker';
import LocationInfoBox from './locationInfoBox';


const Map = ({ eventData, center, zoom}) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map(ev => {
    if (ev.categories[0].id === 8) {
      return(
          <LocationTracker lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() =>  {
              setLocationInfo({ id: ev.id, title: ev.title})
              console.log(locationInfo)
              console.log("clicked")
          }} />
      );
    }
    return null
  })

  return(
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_MAP_API_KEY}}
        defaultCenter= { center }
        defaultZoom= { zoom }
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
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
