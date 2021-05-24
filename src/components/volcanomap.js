import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../keys';
import VolcanoTracker from './volcanoTracker';
//import LocationInfoBox from './locationInfoBox';

class VolcanoMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationInfo: null,
    }
  }

  render() {
    const volcanomarkers = this.props.eventData.map(ev => {
      if (ev.categories[0].id === 12) {
        return(
            <VolcanoTracker key={ev.id} lat={ev.geometries[0].coordinates[1]}
              lng={ev.geometries[0].coordinates[0]}
            />
        );
      }
      return null;
    })

    return(
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{key: GOOGLE_MAP_API_KEY}}
          defaultCenter= { this.props.center }
          defaultZoom= { this.props.zoom }
        >
          {volcanomarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

VolcanoMap.defaultProps = {
  center: {
    lat: 22.56263,
    lng: 88.36304
  },
  zoom: 6
}

export default VolcanoMap;
