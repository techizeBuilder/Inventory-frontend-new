import { Grid } from '@mui/material';
import SalesMetrics from '../../components/sales/SalesMetrics';
import OrdersTable from '../../components/sales/OrdersTable';
import SalesChart from '../../components/sales/SalesChart';

export default function SalesDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SalesMetrics />
      </Grid>
      <Grid item xs={12} md={8}>
        <OrdersTable />
      </Grid>
      <Grid item xs={12} md={4}>
        <SalesChart />
      </Grid>
    </Grid>
  );
}