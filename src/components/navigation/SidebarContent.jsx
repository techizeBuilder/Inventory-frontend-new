import { Box, List, Typography, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import SidebarNavigation from './SidebarNavigation';
import SidebarProfile from './SidebarProfile';
import SidebarFooter from './SidebarFooter';

export default function SidebarContent({ onClose }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <SidebarProfile />
      <Divider />
      <SidebarNavigation onClose={onClose} />
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <SidebarFooter />
    </Box>
  );
}

SidebarContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};