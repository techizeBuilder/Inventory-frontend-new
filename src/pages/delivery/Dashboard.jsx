import { Grid } from '@mui/material';
import DeliveryMetrics from '../../components/delivery/DeliveryMetrics';
import DeliveryTable from '../../components/delivery/DeliveryTable';
import DeliveryMap from '../../components/delivery/DeliveryMap';

export default function DeliveryDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <DeliveryMetrics />
      </Grid>
      <Grid item xs={12} md={8}>
        <DeliveryTable />
      </Grid>
      <Grid item xs={12} md={4}>
        <DeliveryMap />
      </Grid>
    </Grid>
  );
}