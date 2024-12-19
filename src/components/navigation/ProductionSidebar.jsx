import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { Factory, Assessment } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const productionMenuItems = [
  { text: 'Production', icon: <Factory />, path: '/admin/production' },
  { text: 'Reports', icon: <Assessment />, path: '/admin/reports' },
];

export default function ProductionSidebar({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <List>
      {productionMenuItems.map((item) => (
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

ProductionSidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
};