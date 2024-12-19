import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Inventory Management System
          </h1>
          <p className="text-xl mb-8">
            Streamline your business operations with our comprehensive inventory management solution
          </p>
          <div className="space-x-4">
            <Button
              onClick={() => navigate('/login')}
              className="!bg-white !text-indigo-600 hover:!bg-indigo-50 !w-auto !px-8"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate('/register')}
              variant="secondary"
              className="!w-auto !px-8"
            >
              Register
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Sales Management</h3>
            <p>Track sales, manage orders, and analyze performance in real-time</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Production Tracking</h3>
            <p>Monitor production processes and optimize workflow efficiency</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-4">Delivery Management</h3>
            <p>Streamline delivery operations and track shipments effectively</p>
          </div>
        </div>
      </div>
    </div>
  );
}