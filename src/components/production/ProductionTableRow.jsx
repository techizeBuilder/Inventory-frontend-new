import { TableRow, TableCell, Chip, IconButton, Tooltip } from '@mui/material';
import { PlayArrow, Stop, CheckCircle, Info } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { getProductionStatusColor } from '../../utils/productionUtils';

export default function ProductionTableRow({ production }) {
  return (
    <TableRow hover>
      <TableCell>{production.id}</TableCell>
      <TableCell>{production.product}</TableCell>
      <TableCell>{production.quantity}</TableCell>
      <TableCell>
        <Chip
          label={production.status}
          color={getProductionStatusColor(production.status)}
          size="small"
        />
      </TableCell>
      <TableCell>{production.deadline}</TableCell>
      <TableCell>
        <Tooltip title="Start Production">
          <IconButton size="small" color="success">
            <PlayArrow />
          </IconButton>
        </Tooltip>
        <Tooltip title="Stop Production">
          <IconButton size="small" color="error">
            <Stop />
          </IconButton>
        </Tooltip>
        <Tooltip title="Mark Complete">
          <IconButton size="small" color="primary">
            <CheckCircle />
          </IconButton>
        </Tooltip>
        <Tooltip title="View Details">
          <IconButton size="small">
            <Info />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}

ProductionTableRow.propTypes = {
  production: PropTypes.shape({
    id: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
  }).isRequired,
};