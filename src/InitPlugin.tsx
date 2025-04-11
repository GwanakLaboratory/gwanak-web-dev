import { useEffect, useState } from 'react';
import { useRefreshTokenMutation } from './apis';

const InitPlugin = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const refreshMutation = useRefreshTokenMutation();

  useEffect(() => {
    refreshMutation.mutateAsync().finally(() => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) return <p>loading...</p>;
  return <>{children}</>;
};

export default InitPlugin;
