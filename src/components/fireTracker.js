import { Icon } from '@iconify/react';
import fireIcon from '@iconify/icons-mdi/fire-alert';

const FireTracker = ({ lat, lng, onClick }) => {
  return(
    <div className="location-tracker">
      <Icon icon={ fireIcon } className="location-icon" />
    </div>
  );
}

export default FireTracker;
