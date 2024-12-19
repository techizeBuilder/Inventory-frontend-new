export function getProductionStatusColor(status) {
  const colors = {
    pending: 'warning',
    in_progress: 'info',
    completed: 'success',
    stopped: 'error',
  };
  return colors[status] || 'default';
}