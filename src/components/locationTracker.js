import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationTracker = ({ lat, lng, onClick }) => {
  return(
    <div className="location-tracker">
      <Icon icon={ locationIcon } className="location-icon" />
    </div>
  );
}

export default LocationTracker;
