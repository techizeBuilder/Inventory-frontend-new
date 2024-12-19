import BaseSidebar from './BaseSidebar';
import SidebarContent from './SidebarContent';
import PropTypes from 'prop-types';

export default function Sidebar({ open, onClose }) {
  return (
    <BaseSidebar open={open} onClose={onClose}>
      <SidebarContent onClose={onClose} />
    </BaseSidebar>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};