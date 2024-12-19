import { Grid } from '@mui/material';
import SalesMetrics from '../components/sales/SalesMetrics';
import OrdersTable from '../components/sales/OrdersTable';
import ChartCard from '../components/dashboard/ChartCard';

export default function Sales() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SalesMetrics />
      </Grid>
      <Grid item xs={12}>
        <OrdersTable />
      </Grid>
      <Grid item xs={12}>
        <ChartCard />
      </Grid>
    </Grid>
  );
}