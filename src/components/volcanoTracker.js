import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/noto/volcano';

const VolcanoTracker = ({ lat, lng, onClick }) => {
  return(
    <div className="location-tracker">
      <Icon icon={ volcanoIcon } className="location-icon" />
    </div>
  );
}

export default VolcanoTracker;
