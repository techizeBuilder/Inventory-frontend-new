export const CHART_COLORS = {
  primary: '#8884d8',
  secondary: '#82ca9d',
};

export const CHART_CONFIG = {
  defaultHeight: 300,
  strokeDasharray: '3 3',
};

export const formatCurrency = (value) => 
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value);