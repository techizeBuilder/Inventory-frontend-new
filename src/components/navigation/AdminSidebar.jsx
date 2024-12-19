import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import {
  Dashboard,
  People,
  Settings,
  Assessment,
  ShoppingCart,
  Factory,
  LocalShipping,
  Security,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const adminMenuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/admin/dashboard' },
  { text: 'User Management', icon: <People />, path: '/admin/users' },
  { text: 'Role Management', icon: <Security />, path: '/admin/roles' },
  { text: 'Sales', icon: <ShoppingCart />, path: '/admin/sales' },
  { text: 'Production', icon: <Factory />, path: '/admin/production' },
  { text: 'Delivery', icon: <LocalShipping />, path: '/admin/delivery' },
  { text: 'Reports', icon: <Assessment />, path: '/admin/reports' },
  { text: 'Settings', icon: <Settings />, path: '/admin/settings' },
];

export default function AdminSidebar({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <List>
      {adminMenuItems.map((item) => (
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

AdminSidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};