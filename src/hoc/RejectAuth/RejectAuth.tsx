import { useAtomValue } from 'jotai';
import { Outlet, useNavigate } from 'react-router-dom';
import { accessTokenAtom } from '../../store/auth';

const RejectAuth = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();
  if (accessToken) navigate(-1);
  return <Outlet />;
};

export default RejectAuth;
