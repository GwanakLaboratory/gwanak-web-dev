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
type PortfolioUpdatingInfo = {
  title: string;
  account: number;
};

const PortfolioResultPage = () => {
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
      navigate('/auth/portfolios/create', { replace: true });
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
      alert('포트폴리오 명은 20자를 넘을 수 없습니다.');
      return;
    }
    if (data.account < 5000000) {
      alert('희망 투자 금액의 최소 금액은 5,000,000원입니다.');
      return;
    }
    if (data.account % 500000 !== 0) {
      alert('희망 투자 금액의 최소 단위는 500,000원입니다.');
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
          navigate('/auth/portfolios');
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
        title="포트폴리오 생성"
        subtitle={['포트폴리오', ' > 포트폴리오 만들기']}
      />
      <S.PortfolioResultContainer className="layout-padding">
        <S.PropensityTitleText>
          {propensityObj && `당신의 투자성향은 ${propensityObj.name}입니다.`}
        </S.PropensityTitleText>
        {portfolioInfo.detail.portfolio.is_result === false ? (
          <S.PortfolioDescription>
            포트폴리오 생성중입니다.
          </S.PortfolioDescription>
        ) : (
          <S.ResultConatiner>
            <S.FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
              <S.PortfolioDetailContainer>
                <S.InputDetailText>포트폴리오 명 : </S.InputDetailText>
                <S.InputStyle
                  defaultValue={portfolioInfo.detail.portfolio.title}
                  type="text"
                  placeholder="20자 이내로 입력해주세요"
                  {...register('title', { required: true })}
                ></S.InputStyle>
                <S.InputDetailText>희망투자금액 : </S.InputDetailText>
                <S.InputStyle
                  defaultValue={5000000}
                  type="number"
                  placeholder="기본 단위 : 만"
                  min="5000000"
                  step="500000"
                  {...register('account', { required: true })}
                ></S.InputStyle>
              </S.PortfolioDetailContainer>

              <Table headers={['', '종목이름', '금액', '비중']} rows={rows} />
              <S.ResultButton type="submit">포트폴리오 생성</S.ResultButton>
            </S.FormContainer>
          </S.ResultConatiner>
        )}
      </S.PortfolioResultContainer>
    </>
  );
};

export default PortfolioResultPage;
