import { Box, Typography, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

export default function ProductionTableHeader() {
  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6">Production Orders</Typography>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {/* TODO: Implement new production order creation */}}
      >
        New Order
      </Button>
    </Box>
  );
}