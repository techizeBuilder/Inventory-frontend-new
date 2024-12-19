import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';

export default function SidebarFooter() {
  const { logout } = useAuth();

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={logout}>
          <ListItemIcon><Logout /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}