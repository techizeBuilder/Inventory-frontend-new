import { useState, useEffect } from 'react';

const mockProductions = [
  {
    id: 'PRD-001',
    product: 'Widget A',
    quantity: 1000,
    status: 'in_progress',
    deadline: '2024-02-15',
  },
  {
    id: 'PRD-002',
    product: 'Widget B',
    quantity: 500,
    status: 'pending',
    deadline: '2024-02-16',
  },
  {
    id: 'PRD-003',
    product: 'Widget C',
    quantity: 750,
    status: 'completed',
    deadline: '2024-02-14',
  },
];

export function useProduction() {
  const [productions, setProductions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductions = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProductions(mockProductions);
      } catch (error) {
        console.error('Error fetching productions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductions();
  }, []);

  return { productions, loading };
}