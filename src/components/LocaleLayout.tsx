import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import i18n from '../i18n';
import { coercePathToSupportedLocale, isLocaleSegment } from '../i18n/localeRouting';
import type { SupportedLng } from '../i18n/resources';

const LocaleLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();

  if (!isLocaleSegment(lang)) {
    const to = coercePathToSupportedLocale(location.pathname) + location.search + location.hash;
    return <Navigate to={to} replace />;
  }

  useEffect(() => {
    void i18n.changeLanguage(lang as SupportedLng);
  }, [lang]);

  return <Outlet />;
};

export default LocaleLayout;
