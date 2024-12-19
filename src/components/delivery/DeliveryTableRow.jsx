import { TableRow, TableCell, Chip, IconButton, Tooltip } from '@mui/material';
import { CheckCircle, Cancel, Info } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { getDeliveryStatusColor } from '../../utils/deliveryUtils';

export default function DeliveryTableRow({ delivery }) {
  return (
    <TableRow hover>
      <TableCell>{delivery.id}</TableCell>
      <TableCell>{delivery.customer}</TableCell>
      <TableCell>{delivery.address}</TableCell>
      <TableCell>
        <Chip
          label={delivery.status}
          color={getDeliveryStatusColor(delivery.status)}
          size="small"
        />
      </TableCell>
      <TableCell>{delivery.eta}</TableCell>
      <TableCell>
        <Tooltip title="Mark as Delivered">
          <IconButton size="small" color="success">
            <CheckCircle />
          </IconButton>
        </Tooltip>
        <Tooltip title="Cancel Delivery">
          <IconButton size="small" color="error">
            <Cancel />
          </IconButton>
        </Tooltip>
        <Tooltip title="View Details">
          <IconButton size="small" color="primary">
            <Info />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}

DeliveryTableRow.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    eta: PropTypes.string.isRequired,
  }).isRequired,
};