import { Link } from 'react-router-dom';

import DescriptionBox from '../../../components/feature/DescriptionBox';
import { getPropensity } from '../../../utils/propensity';
import { S } from './style';
import Text from '../../../components/common/Text';
import { useGetUserInfoQuery } from '../../../apis/account';

const PortfolioListPage = () => {
  const userInfoQuery = useGetUserInfoQuery();
  if (!userInfoQuery.isSuccess) {
    return null;
  }

  const propensityCode = userInfoQuery.data.detail.propensity;
  const propensity = getPropensity(propensityCode);
  return (
    <>
      <DescriptionBox
        title="포트폴리오 내역"
        subtitle={['포트폴리오', ' > 포트폴리오 내역']}
      />
      <S.PortfolioContainer className="layout-padding">
        <S.PropensityContainer>
          <S.PropensityTextWrapper>
            {propensity ? (
              <>
                <S.PropensityText style={{ color: '#646464', fontWeight: 400 }}>
                  내 투자성향은
                </S.PropensityText>
                <S.PropensityText>{propensity.name}입니다.</S.PropensityText>
              </>
            ) : (
              <S.PropensityText style={{ color: '#646464' }}>
                투자성향을 파악하지 못했습니다.
              </S.PropensityText>
            )}
          </S.PropensityTextWrapper>
          <Link to="/auth/analysis">
            <S.AnalysisButton>
              <Text color="White" typograph="md_bold">
                {userInfoQuery.data.detail.propensity === null ? '' : '재'}분석
                하기
              </Text>
            </S.AnalysisButton>
          </Link>
        </S.PropensityContainer>
      </S.PortfolioContainer>
    </>
  );
};

export default PortfolioListPage;
