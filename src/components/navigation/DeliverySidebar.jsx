import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { LocalShipping, Assessment } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const deliveryMenuItems = [
  { text: 'Delivery', icon: <LocalShipping />, path: '/admin/delivery' },
  { text: 'Reports', icon: <Assessment />, path: '/admin/reports' },
];

export default function DeliverySidebar({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <List>
      {deliveryMenuItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton
            selected={location.pathname === item.path}
            onClick={() => handleNavigation(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

DeliverySidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};