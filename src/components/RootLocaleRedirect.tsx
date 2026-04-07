import { Navigate } from 'react-router-dom';
import { resolveInitialLanguageFromPath } from '../i18n/localeRouting';

/** `/` 접근 시 `/ko` 또는 `/en`으로 보냅니다. */
const RootLocaleRedirect = () => {
  const lng = resolveInitialLanguageFromPath();
  return <Navigate to={`/${lng}`} replace />;
};

export default RootLocaleRedirect;
