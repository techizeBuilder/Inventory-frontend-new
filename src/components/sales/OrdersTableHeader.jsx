import { Box, Typography, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

export default function OrdersTableHeader() {
  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6">Recent Orders</Typography>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {/* TODO: Implement new order creation */}}
      >
        New Order
      </Button>
    </Box>
  );
}