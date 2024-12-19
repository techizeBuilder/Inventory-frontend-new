import { Box, Typography, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

export default function DeliveryTableHeader() {
  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6">Active Deliveries</Typography>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {/* TODO: Implement new delivery creation */}}
      >
        New Delivery
      </Button>
    </Box>
  );
}