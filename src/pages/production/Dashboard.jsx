import { Grid } from '@mui/material';
import ProductionMetrics from '../../components/production/ProductionMetrics';
import ProductionTable from '../../components/production/ProductionTable';
import ProductionChart from '../../components/production/ProductionChart';

export default function ProductionDashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <ProductionMetrics />
      </Grid>
      <Grid item xs={12} md={8}>
        <ProductionTable />
      </Grid>
      <Grid item xs={12} md={4}>
        <ProductionChart />
      </Grid>
    </Grid>
  );
}