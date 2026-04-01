import { Link } from 'react-router-dom';

import DescriptionBox from '../../../components/feature/DescriptionBox';
import { getPropensity } from '../../../utils/propensity';
import { S } from './style';
import Text from '../../../components/common/Text';
import { useGetUserInfoQuery } from '../../../apis/account';
import { useTranslation } from 'react-i18next';

const PortfolioListPage = () => {
  const { t } = useTranslation();
  const userInfoQuery = useGetUserInfoQuery();
  if (!userInfoQuery.isSuccess) {
    return null;
  }

  const propensityCode = userInfoQuery.data.detail.propensity;
  const propensity = getPropensity(propensityCode);
  return (
    <>
      <DescriptionBox
        title={t('portfolio.listTitle')}
        subtitle={[t('portfolio.listBreadcrumb')]}
      />
      <S.PortfolioContainer className="layout-padding">
        <S.PropensityContainer>
          <S.PropensityTextWrapper>
            {propensity ? (
              <>
                <S.PropensityText style={{ color: '#646464', fontWeight: 400 }}>
                  {t('portfolio.myPropensityPrefix')}
                </S.PropensityText>
                <S.PropensityText>
                  {propensity.name}
                  {t('portfolio.myPropensitySuffix')}
                </S.PropensityText>
              </>
            ) : (
              <S.PropensityText style={{ color: '#646464' }}>
                {t('portfolio.propensityNotFound')}
              </S.PropensityText>
            )}
          </S.PropensityTextWrapper>
          <Link to="/auth/analysis">
            <S.AnalysisButton>
              <Text color="White" typograph="md_bold">
                {userInfoQuery.data.detail.propensity === null
                  ? ''
                  : t('portfolio.reanalysisPrefix')}
                {t('portfolio.analysis')}
              </Text>
            </S.AnalysisButton>
          </Link>
        </S.PropensityContainer>
      </S.PortfolioContainer>
    </>
  );
};

export default PortfolioListPage;
