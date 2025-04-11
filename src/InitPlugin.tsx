import { useEffect, useState } from 'react';
import { useRefreshTokenMutation } from './apis';
import { useSetAtom } from 'jotai';
import { accessTokenAtom } from './store/auth';
import { useNavigate } from 'react-router-dom';

const InitPlugin = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  const refreshMutation = useRefreshTokenMutation();
  const setAccessToken = useSetAtom(accessTokenAtom);
  const navigate = useNavigate();

  useEffect(() => {
    refreshMutation.mutateAsync().finally(() => {
      setIsReady(true);
    });
  }, []);

  useEffect(() => {
    const addLogOutEventListner = () => {
      window.addEventListener('FORCE_LOGOUT', () => {
        setAccessToken(null);
        navigate('/home', { replace: true });
      });
    };
    return addLogOutEventListner;
  }, []);

  if (!isReady) return <p>loading...</p>;
  return <>{children}</>;
};

export default InitPlugin;
