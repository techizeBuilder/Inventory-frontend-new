import { Box, Typography } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

export default function SidebarProfile() {
  const { user } = useAuth();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" noWrap component="div">
        {user?.role}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {user?.email}
      </Typography>
    </Box>
  );
}