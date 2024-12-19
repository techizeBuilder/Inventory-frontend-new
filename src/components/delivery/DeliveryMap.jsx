import { Card, CardContent, Typography } from '@mui/material';

export default function DeliveryMap() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Delivery Map
        </Typography>
        <div className="h-[400px] bg-gray-100 rounded flex items-center justify-center">
          <Typography color="text.secondary">
            Map integration coming soon
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}