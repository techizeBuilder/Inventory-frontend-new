import { useState, useEffect } from 'react';

const mockDeliveries = [
  {
    id: 'DEL-001',
    customer: 'John Doe',
    address: '123 Main St, City',
    status: 'in_transit',
    eta: '2:30 PM',
  },
  {
    id: 'DEL-002',
    customer: 'Jane Smith',
    address: '456 Oak Ave, Town',
    status: 'pending',
    eta: '3:45 PM',
  },
  {
    id: 'DEL-003',
    customer: 'Bob Wilson',
    address: '789 Pine Rd, Village',
    status: 'delivered',
    eta: '1:15 PM',
  },
];

export function useDeliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeliveries = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDeliveries(mockDeliveries);
      } catch (error) {
        console.error('Error fetching deliveries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveries();
  }, []);

  return { deliveries, loading };
}