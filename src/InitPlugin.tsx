import { useEffect, useState } from 'react';
import { useRefreshTokenMutation } from './apis';

const InitPlugin = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const refreshMutation = useRefreshTokenMutation();

  // 최초 접속 혹은 새로고침 시 토큰 처리
  useEffect(() => {
    refreshMutation.mutateAsync().finally(() => {
      setIsReady(true);
    });
  }, []);

  if (!isReady) return <p>loading...</p>;
  return <>{children}</>;
};

export default InitPlugin;
