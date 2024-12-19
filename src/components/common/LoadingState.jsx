import { TableRow, TableCell } from '@mui/material';
import PropTypes from 'prop-types';

export default function LoadingState({ colSpan }) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">
        Loading...
      </TableCell>
    </TableRow>
  );
}

LoadingState.propTypes = {
  colSpan: PropTypes.number.isRequired,
};