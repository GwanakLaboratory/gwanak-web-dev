import { useAtomValue } from 'jotai';
import { Navigate, Outlet } from 'react-router-dom';
import { accessTokenAtom } from '../../store/auth';

const RequireAuth = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  if (!accessToken) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default RequireAuth;
