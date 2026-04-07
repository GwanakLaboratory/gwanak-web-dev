import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { accessTokenAtom } from './store/auth';
import { withLocalePrefix } from './i18n/localeRouting';

const EventListenerManager = () => {
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const setAccessToken = useSetAtom(accessTokenAtom);

  useEffect(() => {
    const handleLogout = () => {
      setAccessToken(null);
      navigate(withLocalePrefix('/', lang ?? 'ko'), { replace: true });
    };
    window.addEventListener('FORCE_LOGOUT', handleLogout);
    return () => window.removeEventListener('FORCE_LOGOUT', handleLogout);
  }, []);

  return <Outlet />;
};

export default EventListenerManager;
