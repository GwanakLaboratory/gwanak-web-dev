import { Outlet } from 'react-router-dom';
import LandingNavBar from '../LandingNavBar';
import { S } from '../../layout/AuthLandingLayout/style';
import Footer from '../Footer';

const BasicLayout = () => {
  return (
    <S.Shell>
      <LandingNavBar variant="auth" />
      <S.WideContent>
        <Outlet />
      </S.WideContent>
      <Footer />
    </S.Shell>
  );
};
export default BasicLayout;
