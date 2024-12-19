import { Grid } from '@mui/material';
import { Factory, CheckCircle, Schedule } from '@mui/icons-material';
import MetricCard from '../common/MetricCard';

export default function ProductionMetrics() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <MetricCard
          title="Active Production"
          value="24"
          change={5}
          icon={Factory}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard
          title="Completed Today"
          value="18"
          change={12}
          icon={CheckCircle}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard
          title="Pending Orders"
          value="15"
          change={-8}
          icon={Schedule}
        />
      </Grid>
    </Grid>
  );
}