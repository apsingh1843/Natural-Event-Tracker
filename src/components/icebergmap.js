import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../keys';
import IcebergTracker from './icebergTracker';
//import LocationInfoBox from './locationInfoBox';

class IcebergMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationInfo: null,
    }
  }

  render() {
    const icebergmarkers = this.props.eventData.map(ev => {
      if (ev.categories[0].id === 15) {
        return(
            <IcebergTracker key={ev.id} lat={ev.geometries.pop().coordinates[1]}
              lng={ev.geometries.pop().coordinates[0]}
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
          {icebergmarkers}
        </GoogleMapReact>
      </div>
    );
  }
}

IcebergMap.defaultProps = {
  center: {
    lat: 22.56263,
    lng: 88.36304
  },
  zoom: 6
}

export default IcebergMap;
