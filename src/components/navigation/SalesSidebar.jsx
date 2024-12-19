import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { ShoppingCart, Assessment } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const salesMenuItems = [
  { text: 'Sales', icon: <ShoppingCart />, path: '/admin/sales' },
  { text: 'Reports', icon: <Assessment />, path: '/admin/reports' },
];

export default function SalesSidebar({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <List>
      {salesMenuItems.map((item) => (
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

SalesSidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};