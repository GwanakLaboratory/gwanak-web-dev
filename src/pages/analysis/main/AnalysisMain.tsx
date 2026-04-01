import { useMemo } from 'react';
import useAnalysisForm from '../../../hooks/form/useAnalysisForm';
import Graph from '../../../lib/assets/images/ic_graph_plan.svg';
import { S } from './sytle';
import DescriptionBox from '../../../components/feature/DescriptionBox';
import Text from '../../../components/common/Text';
import Radio from '../../../components/common/Radio';
import Checkbox from '../../../components/common/Checkbox';
import { useTranslation } from 'react-i18next';

const AnalysisMainPage = () => {
  const { t } = useTranslation();
  const form = useAnalysisForm();
  const questions = useMemo(() => {
    const {
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
    } = form;
    return [
      {
        type: 'radiogroup',
        title: '당신의 연령대는 어떻게 됩니까?',
        inputs: [
          { ...ageGroup, value: '1', label: '29세 이하' },
          { ...ageGroup, value: '2', label: '30세~39세' },
          { ...ageGroup, value: '3', label: '40세~49세' },
          { ...ageGroup, value: '4', label: '50세~59세' },
          { ...ageGroup, value: '5', label: '60세 이상' },
        ],
      },
      {
        type: 'radiogroup',
        title: '당신의 가구원 수는 어떻게 됩니까?',
        inputs: [
          { ...householdSize, value: '1', label: '1명' },
          { ...householdSize, value: '2', label: '2명' },
          { ...householdSize, value: '3', label: '3명 이상' },
        ],
      },
      {
        type: 'radiogroup',
        title:
          '다음 중 당신의 수입원을 가장 잘 나타내고 있는 것은 어느 것입니까?',
        inputs: [
          {
            ...incomeChangeLevel,
            value: '1',
            label:
              '현재 일정한 수입이 발생하고 있으며, 향후 현재 수준을 유지하거나 증가할 것으로 예상된다.',
          },
          {
            ...incomeChangeLevel,
            value: '2',
            label:
              '현재 일정한 수입이 발생하고 있으나, 향후 감소하거나 불안정할 것으로 예상된다.',
          },
          {
            ...incomeChangeLevel,
            value: '3',
            label: '현재 일정한 수입이 없으며, 연금이 주수입원이다.',
          },
        ],
      },
      {
        type: 'radiogroup',
        title:
          '현재 투자하고자 하는 자금은 전체 금융자산(부동산 등 실물자산 제외) 중 어느 정도의 비중을 차지합니까?',
        inputs: [
          { ...investmentRatio, value: '1', label: '10% 이내' },
          { ...investmentRatio, value: '2', label: '10% 이상~20% 이내' },
          { ...investmentRatio, value: '3', label: '20% 이상~30% 이내' },
          { ...investmentRatio, value: '4', label: '30% 이상~40% 이내' },
          { ...investmentRatio, value: '5', label: '40% 이상' },
        ],
      },
      {
        type: 'radiogroup',
        title: '투자목적이 무엇입니까?',
        inputs: [
          { ...investmentPurpose, value: '1', label: '단기 목돈 마련' },
          { ...investmentPurpose, value: '2', label: '일반 투자(목돈 운용)' },
          { ...investmentPurpose, value: '3', label: '중요자산 관리' },
          { ...investmentPurpose, value: '4', label: '주택자금 마련' },
          { ...investmentPurpose, value: '5', label: '자녀교육비 마련' },
          { ...investmentPurpose, value: '6', label: '노후준비자금 마련' },
        ],
      },
      {
        type: 'checkbox',
        title: '다음 중 투자경험과 가장 가까운 것은 어느 것입니까?(중복 가능)',
        inputs: [
          {
            ...investmentExperience,
            value: '1',
            label: '은행의 예/적금, 국채, 지방채, 보증채, MMF, CMA 등',
          },
          {
            ...investmentExperience,
            value: '2',
            label:
              '금융채, 신용도가 높은 회사채, 채권형펀드, 원금보존추구형ELS 등',
          },
          {
            ...investmentExperience,
            value: '3',
            label:
              '신용도 중간 등급의 회사채, 원금의 일부만 보장되는 ELS, 혼합형펀드 등',
          },
          {
            ...investmentExperience,
            value: '4',
            label:
              '신용도가 낮은 회사채, 주식, 원금이 보장되지 않는 ELS, 시장수익률 수준의 수익을 추구하는 주식형펀드 등',
          },
          {
            ...investmentExperience,
            value: '5',
            label:
              'ELW, 선물옵션, 시장수익률 이상의 수익을 추구하는 주식형펀드, 파생상품에 투자하는 펀드, 주식 신용거래 등',
          },
        ],
      },
      {
        type: 'radiogroup',
        title:
          '금융상품 투자에 대한 본인의 지식수준은 어느 정도라고 생각하십니까?',
        inputs: [
          {
            ...investmentKnowledge,
            value: '1',
            label:
              '[매우 낮은 수준] 투자의사 결정을 스스로 내려본 경험이 없는 정도',
          },
          {
            ...investmentKnowledge,
            value: '2',
            label: '[낮은 수준] 주식과 채권의 차이를 구별할 수 있는 정도',
          },
          {
            ...investmentKnowledge,
            value: '3',
            label:
              '[높은 수준] 투자할 수 있는 대부분의 금융상품의 차이를 구별할 수 있는 정도',
          },
          {
            ...investmentKnowledge,
            value: '4',
            label:
              '[매우 높은 수준] 금융상품을 비롯하여 모든 투자대상 상품의 차이를 이해할 수 있는 정도',
          },
        ],
      },
      {
        type: 'radiogroup',
        title: '현재 투자하고자 하는 자금의 투자 가능 기간은 얼마나 됩니까?',
        inputs: [
          { ...investmentPeriod, value: '1', label: '6개월 이내' },
          { ...investmentPeriod, value: '2', label: '6개월 이상~1년 이내' },
          { ...investmentPeriod, value: '3', label: '1년 이상~2년 이내' },
          { ...investmentPeriod, value: '4', label: '2년 이상~3년 이내' },
          { ...investmentPeriod, value: '5', label: '3년 이상' },
        ],
      },
      {
        type: 'radiogroup',
        title:
          '만약 투자원금에 손실이 발생할 경우 다음 중 감수할 수 있는 손실 수준은 어느 것입니까?',
        inputs: [
          {
            ...riskTolerance,
            value: '1',
            label: '무슨 일이 있어도 투자원금은 보전되어야 한다.',
          },
          {
            ...riskTolerance,
            value: '2',
            label: '10% 미만까지는 손실을 감수할 수 있을 것 같다.',
          },
          {
            ...riskTolerance,
            value: '3',
            label: '20% 미만까지는 손실을 감수할 수 있을 것 같다.',
          },
          {
            ...riskTolerance,
            value: '4',
            label: '기대수익이 높다면 위험이 높아도 상관하지 않겠다.',
          },
        ],
      },
      {
        type: 'radiogroup',
        title: '선호하는 주식은 어떻게 됩니까?',
        inputs: [
          { ...preferStock, value: '1', label: '잘 알려진 대형주' },
          { ...preferStock, value: '2', label: '나만 아는 소형주' },
        ],
      },
      {
        type: 'radiogroup',
        title:
          '매수한 주식의 수익률 흐름이 다음과 같을 때 매도/매수 여부는 어떻게 됩니까?',
        subTitle: '최초 : 0% -> 10% -> 5% -> 7% -> 3% -> 4% -> -5%',
        content: <img src={Graph} style={{ maxWidth: '100%' }} />,
        inputs: [
          {
            ...investPlanLevel,
            value: '1',
            label: '높은 수준으로 추가 매수한다.',
          },
          {
            ...investPlanLevel,
            value: '2',
            label: '낮은 수준으로 추가 매수한다.',
          },
          { ...investPlanLevel, value: '3', label: '관망한다.' },
          { ...investPlanLevel, value: '4', label: '낮은 수준으로 매도한다.' },
          { ...investPlanLevel, value: '5', label: '높은 수준으로 매도한다.' },
        ],
      },
      {
        type: 'radiogroup',
        title:
          '1주당 5만원에 매수한 주식의 주가 흐름이 다음과 같을 때 기대하는 최소 주가 수준은 어떻게 됩니까?',
        subTitle: '최초: 5만 원 -> 10만 원 -> 15만 원 -> 3만 원 -> 7만 원',
        inputs: [
          { ...targetStockPrice, value: '1', label: '15만원' },
          { ...targetStockPrice, value: '2', label: '10만원' },
          { ...targetStockPrice, value: '3', label: '7만원' },
          { ...targetStockPrice, value: '4', label: '5만원' },
          { ...targetStockPrice, value: '5', label: '3만원' },
        ],
      },
    ];
  }, [form]);
  return (
    <>
      <DescriptionBox
        title={t('analysis.title')}
        subtitle={[t('analysis.breadcrumb')]}
      />
      <S.AnalysisPageForm
        className="layout-padding"
        onSubmit={form.handleSubmit}
      >
        <S.FormTitleText>{t('analysis.mainTitle')}</S.FormTitleText>
        <br></br>
        <Text color="Black" typograph="lg_bold">
          {t('analysis.mainDesc')}
        </Text>
        <S.FormContainer>
          {questions.map(
            ({ title, subTitle, content, type, inputs }, index) => (
              <S.QuestionBox key={index}>
                <S.QuestionTitleText>{title}</S.QuestionTitleText>
                {subTitle && (
                  <S.QuestionSubTitleText>{subTitle}</S.QuestionSubTitleText>
                )}
                {content && <S.QuestionContent>{content}</S.QuestionContent>}
                <S.QuestionInputWrapper>
                  {/* {type === 'radiogroup' ? inputs?.map((input) => <Radio key={input.value} {...input} />) : input && <NumberInput key={input.name} {...input} />} */}
                  {type === 'radiogroup'
                    ? inputs?.map((input) => (
                        <Radio key={input.value} {...input} />
                      ))
                    : inputs?.map((input) => (
                        <Checkbox key={input.value} {...input} />
                      ))}
                </S.QuestionInputWrapper>
              </S.QuestionBox>
            ),
          )}
          <S.AnalysisButton type="submit">{t('analysis.submit')}</S.AnalysisButton>
        </S.FormContainer>
      </S.AnalysisPageForm>
      ;
    </>
  );
};

export default AnalysisMainPage;
