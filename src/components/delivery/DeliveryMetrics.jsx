import { Grid } from '@mui/material';
import { LocalShipping, CheckCircle, Schedule } from '@mui/icons-material';
import MetricCard from '../common/MetricCard';

export default function DeliveryMetrics() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <MetricCard
          title="Active Deliveries"
          value="32"
          change={-8}
          icon={LocalShipping}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard
          title="Completed Today"
          value="45"
          change={18}
          icon={CheckCircle}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard
          title="Pending"
          value="12"
          change={-15}
          icon={Schedule}
        />
      </Grid>
    </Grid>
  );
}