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

  // 최초 접속 혹은 새로고침 시 토큰 처리
  useEffect(() => {
    refreshMutation.mutateAsync().finally(() => {
      setIsReady(true);
    });
  }, []);

  // 이벤트 리스너 등록
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
