import { Icon } from '@iconify/react';
import icebergIcon from '@iconify-icons/openmoji/iceberg';

const IcebergTracker = ({ lat, lng, onClick }) => {
  return(
    <div className="location-tracker">
      <Icon icon={ icebergIcon } className="location-icon" />
    </div>
  );
}
export default IcebergTracker;
