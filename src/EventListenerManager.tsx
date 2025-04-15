import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { accessTokenAtom } from './store/auth';

const EventListenerManager = () => {
  const navigate = useNavigate();
  const setAccessToken = useSetAtom(accessTokenAtom);

  useEffect(() => {
    const handleLogout = () => {
      setAccessToken(null);
      navigate('/', { replace: true });
    };
    window.addEventListener('FORCE_LOGOUT', handleLogout);
    return () => window.removeEventListener('FORCE_LOGOUT', handleLogout);
  }, []);

  return <Outlet />;
};

export default EventListenerManager;
