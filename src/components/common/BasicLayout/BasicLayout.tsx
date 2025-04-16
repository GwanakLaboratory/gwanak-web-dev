import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import { S } from './style';
import Footer from '../Footer';

const navList = [
  { name: '회사소개', link: 'about' },
  {
    name: '기술과 서비스',
    link: '#',
    nested: [
      { name: '서비스 소개', link: 'service' },
      { name: '|', link: '#' },
      { name: '테크 / 특허', link: 'tech' },
    ],
  },
  {
    name: '포트폴리오',
    link: '#',
    nested: [
      { name: '내역', link: 'auth/portfolios' },
      { name: '|', link: '#' },
      { name: '만들기', link: 'auth/portfolios/create' },
    ],
  },
];

const BasicLayout = () => {
  return (
    <S.OuterStyle>
      <S.InnerStyle>
        <Navigation navList={navList} />
        <div style={{ flex: 1, width: '100%' }}>
          <Outlet />
        </div>
        <Footer />
      </S.InnerStyle>
    </S.OuterStyle>
  );
};
export default BasicLayout;
