import { useAtomValue } from 'jotai';
import { Outlet, useNavigate } from 'react-router-dom';
import { accessTokenAtom } from '../../store/auth';
import { useEffect } from 'react';

const RequireAuth = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) navigate('/login', { replace: true });
  }, []);
  return <Outlet />;
};

export default RequireAuth;
