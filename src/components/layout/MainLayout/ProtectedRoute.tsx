import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import { selectUser } from '../../../redux/features/auth/authSlice';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ role, children }: TProtectedRoute) => {
  const user = useAppSelector(selectUser);

  if (!user) return <Navigate to="/login" replace />;

  if (role !== undefined && user.role !== role) {
    //logout the user
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
