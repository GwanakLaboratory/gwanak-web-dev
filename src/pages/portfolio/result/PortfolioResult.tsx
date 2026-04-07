import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetPortfolio, useUpdatePortfolio } from '../../../apis/portfolio';
import { useGetUserInfoQuery } from '../../../apis/account';
import { getPropensity } from '../../../utils/propensity';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { S } from './style';
import DescriptionBox from '../../../components/feature/DescriptionBox';
import Table from '../../../components/common/Table';
import { formattedRatio } from '../../../utils/portfolio';
import { useTranslation } from 'react-i18next';
import { useLocalizedPath } from '../../../i18n/useLocalizedPath';
type PortfolioUpdatingInfo = {
  title: string;
  account: number;
};

const PortfolioResultPage = () => {
  const { t } = useTranslation();
  const localizedPath = useLocalizedPath();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, control } = useForm<PortfolioUpdatingInfo>();
  const totalMoneyWatch = useWatch({
    control,
    name: 'account',
    defaultValue: 5000000,
  });

  useEffect(() => {
    if (!location.state) {
      navigate(localizedPath('/auth/portfolios/create'), { replace: true });
    }
  }, []);

  const userInfoQuery = useGetUserInfoQuery();
  const portfolioId = location.state;
  const updatePortfolioMutation = useUpdatePortfolio();
  const { data: portfolioInfo } = useGetPortfolio({
    portfolioId: portfolioId ?? '',
  });

  if (!portfolioId) return;
  if (!userInfoQuery.isSuccess) return;

  const propensityObj = getPropensity(userInfoQuery.data.detail.propensity);

  const onSubmitHandler: SubmitHandler<PortfolioUpdatingInfo> = (data) => {
    console.log('asdf');
    if (data.title.length > 20) {
      alert(t('portfolio.titleTooLong'));
      return;
    }
    if (data.account < 5000000) {
      alert(t('portfolio.minAmount'));
      return;
    }
    if (data.account % 500000 !== 0) {
      alert(t('portfolio.unitAmount'));
      return;
    }
    updatePortfolioMutation.mutate(
      {
        title: data.title,
        account: data.account,
        portfolioId: portfolioId,
      },
      {
        onSuccess: () => {
          navigate(localizedPath('/auth/portfolios'));
        },
      },
    );
  };
  if (!portfolioInfo) return;

  const rows = portfolioInfo.detail.portfolio.stock_list
    .sort((a, b) => b.ratio - a.ratio)
    .filter((item) => Number(item.ratio.toFixed(3)) > 0.0)
    .map((item, idx) => {
      return [
        idx + 1,
        <S.StockLinkText
          href={`https://m.stock.naver.com/domestic/stock/${item.stock_code}/total`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {item.stock_name}
        </S.StockLinkText>,
        Math.floor(totalMoneyWatch * item.ratio).toLocaleString('ko-KR'),
        formattedRatio(item.ratio),
      ];
    });

  return (
    <>
      <DescriptionBox
        title={t('portfolio.createTitle')}
        subtitle={[t('portfolio.createBreadcrumb')]}
      />
      <S.PortfolioResultContainer className="layout-padding">
        <S.PropensityTitleText>
          {propensityObj && `당신의 투자성향은 ${propensityObj.name}입니다.`}
        </S.PropensityTitleText>
        {portfolioInfo.detail.portfolio.is_result === false ? (
          <S.PortfolioDescription>
            {t('portfolio.generating')}
          </S.PortfolioDescription>
        ) : (
          <S.ResultConatiner>
            <S.FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
              <S.PortfolioDetailContainer>
                <S.InputDetailText>{t('portfolio.portfolioName')}</S.InputDetailText>
                <S.InputStyle
                  defaultValue={portfolioInfo.detail.portfolio.title}
                  type="text"
                  placeholder={t('portfolio.titlePlaceholder')}
                  {...register('title', { required: true })}
                ></S.InputStyle>
                <S.InputDetailText>{t('portfolio.targetAmount')}</S.InputDetailText>
                <S.InputStyle
                  defaultValue={5000000}
                  type="number"
                  placeholder={t('portfolio.amountPlaceholder')}
                  min="5000000"
                  step="500000"
                  {...register('account', { required: true })}
                ></S.InputStyle>
              </S.PortfolioDetailContainer>

              <Table
                headers={[
                  '',
                  t('portfolio.stockName'),
                  t('portfolio.amount'),
                  t('portfolio.ratio'),
                ]}
                rows={rows}
              />
              <S.ResultButton type="submit">{t('portfolio.createButton')}</S.ResultButton>
            </S.FormContainer>
          </S.ResultConatiner>
        )}
      </S.PortfolioResultContainer>
    </>
  );
};

export default PortfolioResultPage;
