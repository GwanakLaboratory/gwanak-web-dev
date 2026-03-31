import { useEffect, useRef, useState } from 'react';
import { useRefreshTokenMutation } from './apis';

const InitPlugin = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const refreshMutation = useRefreshTokenMutation();

  const hasRefreshed = useRef(false);

  useEffect(() => {
    if (hasRefreshed.current) return;
    hasRefreshed.current = true;

    refreshMutation.mutateAsync().finally(() => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) return <p>loading...</p>;
  return <>{children}</>;
};

export default InitPlugin;
