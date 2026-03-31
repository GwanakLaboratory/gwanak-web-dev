import { useAtomValue } from 'jotai';
import { Outlet, useNavigate } from 'react-router-dom';
import { accessTokenAtom } from '../../store/auth';
import { useEffect } from 'react';

const RejectAuth = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) navigate('/portfolios', { replace: true });
  }, []);
  return <Outlet />;
};

export default RejectAuth;
