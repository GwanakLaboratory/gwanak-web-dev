import { useEffect, useState } from 'react';
import useCustomForm from '../../../hooks/useCustomForm';
import InvestImagePng0 from '../../../lib/assets/images/img_invest_type_0.png';
import InvestImagePng1 from '../../../lib/assets/images/img_invest_type_1.png';
import InvestImagePng2 from '../../../lib/assets/images/img_invest_type_2.png';
import InvestImagePng3 from '../../../lib/assets/images/img_invest_type_3.png';
import InvestImagePng4 from '../../../lib/assets/images/img_invest_type_4.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  useGetUserInfoQuery,
  useSetPropensityMutation,
} from '../../../apis/account';
import { SubmitHandler } from 'react-hook-form';
import {
  getAnalysisResult,
  getAnalysisScore,
  getAnalysisType,
} from '../../../utils/analysis';
import DescriptionBox from '../../../components/feature/DescriptionBox';
import { S } from './style';
import Checkbox from '../../../components/common/Checkbox';

const labelMap: {
  [key in string]: {
    label: string;
  };
} = {
  age: {
    label: '연령',
  },
  householdSize: {
    label: '가구원 수',
  },
  incomeChangeLevel: {
    label: '수입원',
  },
  investmentRatio: {
    label: '투자자산비중',
  },
  investmentPurpose: {
    label: '투자목적',
  },
  investmentExperience: {
    label: '금융투자경험',
  },
  investmentKnowledge: {
    label: '금융이해도',
  },
  investmentPeriod: {
    label: '투자기간',
  },
  riskTolerance: {
    label: '원금손실여부',
  },
  preferStock: {
    label: '선호주식',
  },
};
const typeDetails = {
  1: {
    img: InvestImagePng0,
    typeName: '안정형',
    detail:
      '예금이나 적금 수준의 수익률을 기대하며, 투자원금에 손실이 발생하는 것을 원하지 않는다.\n원금손실의 우려가 없는 상품에 투자하는 것이 바람직하며 CMA와 MMF가 좋다.',
  },
  2: {
    img: InvestImagePng1,
    typeName: '안정추구형',
    detail:
      '투자원금의 손실위험은 최소화하고, 이자소득이나 배당소득 수준의 안정적인 투자를 목표로 한다.\n다만 수익을 위해 단기적인 손실을 수용할 수 있으며, 예·적금보다 높은 수익을 위해 자산 중의 일부를 변동성 높은 상품에 투자할 의향이 있다.\n채권형펀드가 적당하며, 그중에서도 장기회사채펀드 등이 좋다.',
  },
  3: {
    img: InvestImagePng2,
    typeName: '위험중립형',
    detail:
      '투자에는 그에 상응하는 투자위험이 있음을 충분히 인식하고 있으며, 예·적금보다 높은 수익을 기대할 수 있다면 일정수준의 손실위험을 감수할 수 있다.\n적립식펀드나 주가연동상 품처럼 중위험 펀드로 분류되는 상품을 선택하는 것이 좋다.',
  },
  4: {
    img: InvestImagePng3,
    typeName: '적극투자형',
    detail:
      '투자원금의 보전보다는 위험을 감내하더라도 높은 수준의 투자수익을 추구한다.\n투자자금의 상당 부분을 주식, 주식형펀드 또는 파생상품 등의 위험자산에 투자할 의향이 있다.\n국내외 주식형펀드와 원금비보장형 주가연계증권(ELS) 등 고수익·고위험 상품에 투자할 수 있다.',
  },
  5: {
    img: InvestImagePng4,
    typeName: '공격형',
    detail:
      '시장평균수익률을 훨씬 넘어서는 높은 수준의 투자수익을 추구하며, 이를 위해 자산가치의 변동에 따른 손실위험을 적극 수용할 수 있다.\n투자자금 대부분을 주식, 주식형펀드 또는 파생상품 등의 위험자산에 투자할 의향이 있다.\n주식 비중이 70% 이상인 고위험 펀드가 적당하고, 자산의 10% 정도는 직접투자(주식)도 고려해볼 만하다.',
  },
};
type AnalysisResultFormType = {
  agreement: boolean;
};
const AnalysisResultPage = () => {
  const { register, handleSubmit } = useCustomForm<AnalysisResultFormType>();
  const [analysisScore, setAnalysisScore] = useState(0);
  const [resultSummary, setResultSummary] = useState({
    age: '',
    householdSize: '',
    incomeChangeLevel: '',
    investmentRatio: '',
    investmentPurpose: '',
    investmentExperience: '',
    investmentKnowledge: '',
    investmentPeriod: '',
    riskTolerance: '',
    preferStock: '',
  });
  const location = useLocation();
  const navigate = useNavigate();
  const propensityMutation = useSetPropensityMutation();
  const userInfoQuery = useGetUserInfoQuery();
  useEffect(() => {
    if (!location.state) {
      navigate('/auth/analysis', { replace: true });
    } else {
      const analysisScore = getAnalysisScore(location.state);
      setAnalysisScore(analysisScore);
      const summary = getAnalysisResult(location.state);
      setResultSummary(summary);
    }
  }, []);

  if (!userInfoQuery.isSuccess) {
    return null;
  }
  const result = {
    name: userInfoQuery.data.detail.full_name
      ? userInfoQuery.data.detail.full_name
      : '',
    type: getAnalysisType(analysisScore),
    result: {
      age: resultSummary.age,
      householdSize: resultSummary.householdSize,
      incomeChangeLevel: resultSummary.incomeChangeLevel,
      investmentRatio: resultSummary.investmentRatio,
      investmentPurpose: resultSummary.investmentPurpose,
      investmentExperience: resultSummary.investmentExperience,
      investmentKnowledge: resultSummary.investmentKnowledge,
      investmentPeriod: resultSummary.investmentPeriod,
      riskTolerance: resultSummary.riskTolerance,
      preferStock: resultSummary.preferStock,
    },
  };
  const type = result.type as keyof typeof typeDetails;
  const typeDetail = typeDetails[type];

  const onSubmitHandler: SubmitHandler<AnalysisResultFormType> = (data) => {
    if (data.agreement) {
      propensityMutation.mutate(
        { score: analysisScore },
        {
          onSuccess: () => navigate('/auth/portfolios'),
        },
      );
    }
  };

  return (
    <>
      <DescriptionBox
        title="금융성향분석"
        subtitle={['포트폴리오', '> 포트폴리오 만들기']}
      />
      <S.ResultContainer className="layout-padding">
        <S.ResultTitleText>
          {result.name}님은 {typeDetail.typeName}입니다.
        </S.ResultTitleText>
        <S.ResultImage src={typeDetail.img} />
        <S.ResultDetail>
          {typeDetail.detail.split('\n').map((text) => (
            <>
              {text}
              <br />
            </>
          ))}
        </S.ResultDetail>
        <S.ResultTable>
          {Object.entries(result.result).map(([key, value]) => (
            <S.ResultColumn key={key}>
              <S.ResultLabel>{labelMap[key].label}</S.ResultLabel>
              <S.ResultValue>{value}</S.ResultValue>
            </S.ResultColumn>
          ))}
        </S.ResultTable>
        <S.FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
          <S.CheckboxContainer>
            <Checkbox
              size="large"
              label="동의합니다."
              {...register('agreement', { required: true })}
              labelStyle={{ fontSize: '3.8rem' }}
            />
          </S.CheckboxContainer>

          <S.ResultComment>
            위의 투자성향을 기준으로 AI가 전략을 추천 해드립니다.
          </S.ResultComment>
          <S.ResultButtons>
            <S.ResultButton color="primary">
              <Link to="/auth/analysis">재분석 하기</Link>
            </S.ResultButton>
            <S.ResultButton type="submit">등록하기</S.ResultButton>
          </S.ResultButtons>
        </S.FormContainer>
      </S.ResultContainer>
    </>
  );
};
export default AnalysisResultPage;
