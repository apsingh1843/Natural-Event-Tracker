import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../keys';
import FireTracker from './fireTracker';
//import LocationInfoBox from './locationInfoBox';

class FireMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationInfo: null,
    }
  }

  render() {
    console.log(this.props.eventData);

    const firemarkers = this.props.eventData.map(ev => {
      if (ev.categories[0].id === 8) {
        return(
            <FireTracker key={ev.id} lat={ev.geometries[0].coordinates[1]}
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
          {firemarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

FireMap.defaultProps = {
  center: {
    lat: 22.56263,
    lng: 88.36304
  },
  zoom: 3
}

export default FireMap;
