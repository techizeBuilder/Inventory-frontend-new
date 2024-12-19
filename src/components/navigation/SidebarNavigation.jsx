import { useAuth } from '../../contexts/AuthContext';
import { ROLES } from '../../utils/roleUtils';
import AdminSidebar from './AdminSidebar';
import SalesSidebar from './SalesSidebar';
import ProductionSidebar from './ProductionSidebar';
import DeliverySidebar from './DeliverySidebar';
import PropTypes from 'prop-types';

export default function SidebarNavigation({ onClose }) {
  const { user } = useAuth();

  switch (user?.role) {
    case ROLES.SUPER_ADMIN:
      return <AdminSidebar onClose={onClose} />;
    case ROLES.SALES_MANAGER:
      return <SalesSidebar onClose={onClose} />;
    case ROLES.PRODUCTION_MANAGER:
      return <ProductionSidebar onClose={onClose} />;
    case ROLES.DELIVERY_MANAGER:
      return <DeliverySidebar onClose={onClose} />;
    default:
      return null;
  }
}

SidebarNavigation.propTypes = {
  onClose: PropTypes.func.isRequired,
};