import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export type AnalysisForm = {
  ageGroup: number; // 연령대 (1: 29세 이하, 2: 30세 ~ 39세, 3: 40세 ~ 49세, 4: 50세 ~ 59세, 5: 60세 이상)
  householdSize: number; // 가구원 수 (1: 1명, 2: 2명, 3: 3명 이상)
  incomeChangeLevel: number; // 연간 수입원이 어떻게 변화할 것인지 (1: 현재 수입이 있으며 안정, 2: 현재 수입이 있으며 불안정, 3: 현재 수입이 없음)
  investmentRatio: number; // 현재 자산의 투자자금 비율 (1: 10%이내, 2: 10% ~ 20%, 3: 20% ~ 30%, 4: 30% ~ 40%, 5: 40% 이상)
  investmentPurpose: number; // 투자목적 (1: 단기목돈, 2: 일반투자, 3: 중요자산 관리, 4: 주택자금, 5: 자녀교육비, 6: 노후준비자금)
  investmentExperience: number[]; // 투자해본 투자 종목
  investmentKnowledge: number; // 투자에 대한 지식 수준 (1: 매우 낮음, 2: 낮음, 3: 보통, 4:높음, 5: 매우 높음)
  investmentPeriod: number; // 투자 가능 기간 (1: 6개월 이내, 2: 6개월 ~ 1년, 3: 1년 ~ 2년, 4: 2년 ~ 3년, 5: 3년 이상)
  riskTolerance: number; // 손실에 대한 감수력 (1: 원금 보존, 2: 10%, 3: 20%, 4: 위험)
  preferStock: number; // 선호하는 주식 (1: 대형주, 2: 소형주)
  investPlanLevel: number; // 예시에 대해 어떻게 투자할 것인지 (1: 높은 수준 추가 매수, 2: 낮은 수준 추가 매수, 3: 관망, 4: 낮은 수준 매도, 5: 높은 수준 매도)
  targetStockPrice: number; // 기대하는 최소 주가 수준 (1: 3만원, 2: 5만원, 3: 7만원, 4: 10만원, 5: 15만원)
};

const useAnalysisForm = () => {
  const {
    register,
    control,
    handleSubmit: handleSubmitWrapper,
  } = useForm<AnalysisForm>();
  const navigate = useNavigate();
  const handleSubmit: SubmitHandler<AnalysisForm> = ({
    ageGroup,
    householdSize,
    incomeChangeLevel,
    investmentRatio,
    investmentPurpose,
    investmentExperience,
    investmentKnowledge,
    investmentPeriod,
    riskTolerance,
    preferStock,
    investPlanLevel,
    targetStockPrice,
  }) => {
    const data = {
      ageGroup,
      householdSize,
      incomeChangeLevel,
      investmentRatio,
      investmentPurpose,
      investmentExperience,
      investmentKnowledge,
      investmentPeriod,
      riskTolerance,
      preferStock,
      investPlanLevel,
      targetStockPrice,
    };
    const checkValues = Object.entries(data).map(
      ([, value]) => value === undefined,
    );
    if (checkValues.find((item) => item === true)) {
      alert('항목을 모두 채워주세요.');
      return;
    }
    navigate('result', { state: { ...data } });
  };

  return {
    handleSubmit: handleSubmitWrapper(handleSubmit, () =>
      alert('항목을 모두 채워주세요.'),
    ),
    control,
    ageGroup: {
      ...register('ageGroup', { required: true }),
    },
    householdSize: {
      ...register('householdSize', { required: true }),
    },
    incomeChangeLevel: {
      ...register('incomeChangeLevel', { required: true }),
    },
    investmentRatio: {
      ...register('investmentRatio', { required: true }),
    },
    investmentPurpose: {
      ...register('investmentPurpose', { required: true }),
    },
    investmentExperience: {
      ...register('investmentExperience', { required: true }),
    },
    investmentKnowledge: {
      ...register('investmentKnowledge', { required: true }),
    },
    investmentPeriod: {
      ...register('investmentPeriod', { required: true }),
    },
    riskTolerance: {
      ...register('riskTolerance', { required: true }),
    },
    preferStock: {
      ...register('preferStock', { required: true }),
    },
    investPlanLevel: {
      ...register('investPlanLevel', { required: true }),
    },
    targetStockPrice: {
      ...register('targetStockPrice', { required: true }),
    },
  };
};

export default useAnalysisForm;
