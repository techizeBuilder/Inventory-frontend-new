import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', completed: 12 },
  { name: 'Tue', completed: 15 },
  { name: 'Wed', completed: 8 },
  { name: 'Thu', completed: 10 },
  { name: 'Fri', completed: 14 },
];

export default function ProductionChart() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Weekly Production
        </Typography>
        <div style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completed" fill="#1976d2" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}