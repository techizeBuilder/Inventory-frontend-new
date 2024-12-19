import { TableRow, TableCell, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { getStatusColor } from '../../utils/orderUtils';

export default function OrdersTableRow({ order }) {
  return (
    <TableRow hover>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.customer}</TableCell>
      <TableCell>${order.amount.toFixed(2)}</TableCell>
      <TableCell>
        <Chip
          label={order.status}
          color={getStatusColor(order.status)}
          size="small"
        />
      </TableCell>
      <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
    </TableRow>
  );
}

OrdersTableRow.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};