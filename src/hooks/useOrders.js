import { useState, useEffect } from 'react';

// Mock data - replace with actual API call
const mockOrders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    amount: 1250.00,
    status: 'pending',
    date: '2024-02-10',
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    amount: 850.50,
    status: 'completed',
    date: '2024-02-09',
  },
  {
    id: 'ORD-003',
    customer: 'Bob Wilson',
    amount: 2100.75,
    status: 'processing',
    date: '2024-02-08',
  },
];

export function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchOrders = async () => {
      try {
        // Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOrders(mockOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return { orders, loading };
}