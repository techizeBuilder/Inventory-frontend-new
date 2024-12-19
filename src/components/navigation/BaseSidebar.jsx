import { Box, Drawer, useTheme, useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types';

export default function BaseSidebar({ open, onClose, width = 240, children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={onClose}
      sx={{
        width: width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: width,
          boxSizing: 'border-box',
        },
      }}
    >
      {children}
    </Drawer>
  );
}

BaseSidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
};