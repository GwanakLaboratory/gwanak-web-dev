import { useEffect, useRef, useState } from 'react';
import { useRefreshTokenMutation } from './apis';
import { useTranslation } from 'react-i18next';

const InitPlugin = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const refreshMutation = useRefreshTokenMutation();
  const { t } = useTranslation();

  const hasRefreshed = useRef(false);

  useEffect(() => {
    if (hasRefreshed.current) return;
    hasRefreshed.current = true;

    refreshMutation.mutateAsync().finally(() => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) return <p>{t('app.loading')}</p>;
  return <>{children}</>;
};

export default InitPlugin;
