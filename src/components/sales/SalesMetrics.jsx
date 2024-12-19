import { Grid } from '@mui/material';
import { ShoppingCart, Payments, TrendingUp } from '@mui/icons-material';
import MetricCard from './MetricCard';

export default function SalesMetrics() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <MetricCard
          title="Total Sales"
          value="$45,650"
          change={15}
          icon={ShoppingCart}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard
          title="Revenue"
          value="$38,200"
          change={12}
          icon={Payments}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <MetricCard
          title="Growth"
          value="23%"
          change={8}
          icon={TrendingUp}
        />
      </Grid>
    </Grid>
  );
}