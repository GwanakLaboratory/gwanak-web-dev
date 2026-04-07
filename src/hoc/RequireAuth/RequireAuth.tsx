import { useAtomValue } from 'jotai';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { accessTokenAtom } from '../../store/auth';
import { useEffect } from 'react';
import { withLocalePrefix } from '../../i18n/localeRouting';

const RequireAuth = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  useEffect(() => {
    if (!accessToken) navigate(withLocalePrefix('/login', lang ?? 'ko'), { replace: true });
  }, [accessToken, navigate, lang]);
  return <Outlet />;
};

export default RequireAuth;
