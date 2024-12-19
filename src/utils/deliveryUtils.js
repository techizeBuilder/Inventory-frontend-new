export function getDeliveryStatusColor(status) {
  const colors = {
    pending: 'warning',
    in_transit: 'info',
    delivered: 'success',
    cancelled: 'error',
  };
  return colors[status] || 'default';
}