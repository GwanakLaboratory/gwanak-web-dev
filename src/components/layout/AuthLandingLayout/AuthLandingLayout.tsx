import { Outlet } from 'react-router-dom';
import LandingNavBar from '../../common/LandingNavBar';
import { S } from './style';

const AuthLandingLayout = () => {
  return (
    <S.Shell>
      <LandingNavBar variant="auth" />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Shell>
  );
};

export default AuthLandingLayout;
