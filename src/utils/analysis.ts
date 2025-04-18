import { AnalysisForm } from '../hooks/form/useAnalysisForm';

const getAnalysisScore = (data: AnalysisForm) => {
  const scoreArray = [
    [10, 8, 6, 4, 2],
    [2, 4, 6],
    [6, 4, 2],
    [10, 8, 6, 4, 2],
    [2, 2, 4, 4, 6, 6],
    [2, 4, 6, 8, 10],
    [2, 4, 6, 8],
    [2, 4, 6, 8, 10],
    [-2, 2, 6, 10],
    [2, 4],
    [15, 10, 5, 0, -5],
    [15, 10, 5, 0, -5],
  ];
  const ageGroupScore = scoreArray[0][data.ageGroup - 1];
  const householdSizeScore = scoreArray[1][data.householdSize - 1];
  const incomeChangeLevelScore = scoreArray[2][data.incomeChangeLevel - 1];
  const investmentRatioScore = scoreArray[3][data.investmentRatio - 1];
  const investmentPurposeScore = scoreArray[4][data.investmentPurpose - 1];
  const investmentExperienceScore =
    scoreArray[5][data.investmentExperience.sort((a, b) => b - a)[0] - 1];
  const investmentKnowledgeScore = scoreArray[6][data.investmentKnowledge - 1];
  const investmentPeriodScore = scoreArray[7][data.investmentPeriod - 1];
  const riskToleranceChoice = data.riskTolerance - 1;
  const preferStockScore = scoreArray[9][data.preferStock - 1];
  const investPlanLevelScore = scoreArray[10][data.investPlanLevel - 1];
  const targetStockPriceScore = scoreArray[11][data.targetStockPrice - 1];

  console.log(`1번 문항 ${data.ageGroup}을 골랐음. 점수는 ${ageGroupScore}`);
  console.log(
    `2번 문항 ${data.householdSize}을 골랐음. 점수는 ${householdSizeScore}`,
  );
  console.log(
    `3번 문항 ${data.incomeChangeLevel}을 골랐음. 점수는 ${incomeChangeLevelScore}`,
  );
  console.log(
    `4번 문항 ${data.investmentRatio}을 골랐음. 점수는 ${investmentRatioScore}`,
  );
  console.log(
    `5번 문항 ${data.investmentPurpose}을 골랐음. 점수는 ${investmentPurposeScore}`,
  );
  console.log(
    `6번 문항 ${data.investmentExperience}을 골랐음. 점수는 ${investmentExperienceScore}`,
  );
  console.log(
    `7번 문항 ${data.investmentKnowledge}을 골랐음. 점수는 ${investmentKnowledgeScore}`,
  );
  console.log(
    `8번 문항 ${data.investmentPeriod}을 골랐음. 점수는 ${investmentPeriodScore}`,
  );
  console.log(
    `9번 문항 ${data.riskTolerance}을 골랐음. 고른것은 ${riskToleranceChoice}`,
  );
  console.log(
    `10번 문항 ${data.preferStock}을 골랐음. 점수는 ${preferStockScore}`,
  );
  console.log(
    `11번 문항 ${data.investPlanLevel}을 골랐음. 점수는 ${investPlanLevelScore}`,
  );
  console.log(
    `12번 문항 ${data.targetStockPrice}을 골랐음. 점수는 ${targetStockPriceScore}`,
  );

  const resultScore =
    ageGroupScore +
    householdSizeScore +
    incomeChangeLevelScore +
    investmentRatioScore +
    investmentPurposeScore +
    investmentExperienceScore +
    investmentKnowledgeScore +
    investmentPeriodScore +
    preferStockScore +
    investPlanLevelScore +
    targetStockPriceScore;

  console.log(`총점수 : ${resultScore}`);
  if (riskToleranceChoice === 0 && resultScore <= 20) return 0;
  else if (riskToleranceChoice === 0 && resultScore > 20) return 21;
  else return resultScore;
};

const getAnalysisType = (score: number) => {
  if (score >= 0 && score <= 20) {
    return 1;
  } else if (score >= 21 && score <= 40) {
    return 2;
  } else if (score >= 41 && score <= 60) {
    return 3;
  } else if (score >= 61 && score <= 80) {
    return 4;
  } else {
    return 5;
  }
};

const getAnalysisResult = (data: AnalysisForm) => {
  const resultArray = [
    ['29세 이하', '30~39세', '40~49세', '50~59세', '60세 이상'],
    ['1명', '2명', '3명'],
    [
      '일정한 수입이 있으며 유지 혹은 증가',
      '일정한 수입이 있지만 감소 혹은 불안정',
      '일정한 수입이 없으며 연금이 주수입',
    ],
    [
      '10% 이내',
      '10% 이상 20% 이내',
      '20% 이상 30% 이내',
      '30% 이상 40% 이내',
      '40% 이상',
    ],
    [
      '단기 목돈 마련',
      '일반투자(목돈 운용)',
      '중요자산 관리',
      '주택자금 마련',
      '자녀교육비 마련',
      '노후준비자금 마련',
    ],
    [
      '은행 예적금, 국채, 지방채, 보증채, MMF, CMA',
      '금융채, 신용도가 높은 회사채, 채권형펀드, 원금보존추구형ELS',
      '신용도 중간 등급의 회사채, 원금의 일부만 보장되는 ELS, 혼합형펀드',
      '신용도가 낮은 회사채, 주식, 원금이 보장되지 않는 ELS, 시장수익률 수준의 수익을 추구하는 주식형펀드',
      'ELW, 선물옵션, 시장수익률 이상의 수익을 추구하는 주식형펀드, 파생상품에 투자하는 펀드, 주식 신용거래',
    ],
    ['매우 낮음', '낮음', '높음', '매우 높음'],
    [
      '6개월 이내',
      '6개월 이상 1년 이내',
      '1년 이상 2년 이내',
      '2년 이상 3년 이내',
      '3년 이상',
    ],
    ['투자원금 보전', '10% 손실 감수', '20% 손실 감수', '기대 수익 우선'],
    ['대형주', '소형주'],
  ];
  const ageGroupResult = resultArray[0][data.ageGroup - 1];
  const householdSizeResult = resultArray[1][data.householdSize - 1];
  const incomeChangeLevelResult = resultArray[2][data.incomeChangeLevel - 1];
  const investmentRatioResult = resultArray[3][data.investmentRatio - 1];
  const investmentPurposeResult = resultArray[4][data.investmentPurpose - 1];
  const investmentExperienceResult =
    resultArray[5][data.investmentExperience.sort((a, b) => b - a)[0] - 1];
  const investmentKnowledgeResult =
    resultArray[6][data.investmentKnowledge - 1];
  const investmentPeriodResult = resultArray[7][data.investmentPeriod - 1];
  const riskToleranceResult = resultArray[8][data.riskTolerance - 1];
  const preferStockResult = resultArray[9][data.preferStock - 1];

  const result = {
    age: ageGroupResult,
    householdSize: householdSizeResult,
    incomeChangeLevel: incomeChangeLevelResult,
    investmentRatio: investmentRatioResult,
    investmentPurpose: investmentPurposeResult,
    investmentExperience: investmentExperienceResult,
    investmentKnowledge: investmentKnowledgeResult,
    investmentPeriod: investmentPeriodResult,
    riskTolerance: riskToleranceResult,
    preferStock: preferStockResult,
  };
  return result;
};

export { getAnalysisResult, getAnalysisScore, getAnalysisType };
