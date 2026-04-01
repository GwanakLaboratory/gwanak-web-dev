import { useMemo } from 'react';
import { useGetUserInfoQuery } from '../../../apis/account';
import DescriptionBox from '../../../components/feature/DescriptionBox';
import usePortfolioForm from '../../../hooks/form/usePortfolioForm';
import {
  getPropensity,
  getPropensityTableData,
} from '../../../utils/propensity';
import { S } from './style';
import Radio from '../../../components/common/Radio';
import Text from '../../../components/common/Text';
import { useTranslation } from 'react-i18next';

const CreatePortfolioPage = () => {
  const { t } = useTranslation();
  const { handleSubmit, model, propensity } = usePortfolioForm();
  const propensities = getPropensityTableData();
  const portfolios = useMemo(() => {
    return [
      {
        type: 'radiogroup',
        title: '포트폴리오 종류를 선택하세요.',
        inputs: [
          {
            ...model,
            value: 'TE',
            label: 'TE국내개별',
            sublabel: '국내 상장 주식 대상 전통적 방식의 포트폴리오',
          },
          {
            ...model,
            value: 'ETF',
            label: 'TP국내ETF',
            sublabel:
              '국내 상장 주식 및 ETF 대상 리스크 최소화에 중점을 둔 포트폴리오',
          },
          {
            ...model,
            value: 'ETF_TQ',
            label: 'TTP국내ETF',
            sublabel: '국내 상장 ETF 대상 리스크 최소화에 중점을 둔 포트폴리오',
          },
          {
            ...model,
            value: 'STOCK_ETF',
            label: 'TP국내상장',
            sublabel: ' TP국내상장 대비 보수적으로 추출한 포트폴리오',
          },
          {
            ...model,
            value: 'STOCK_ETF_TQ',
            label: 'TTP국내상장',
            sublabel: ' TP국내ETF 대비 보수적으로 추출한 포트폴리오',
          },
        ],
      },
      {
        type: 'radiogroup',
        title: '본인에게 맞는 포트폴리오 유형을 선택하세요.',
        inputs: propensities.map((item) => ({
          ...propensity,
          ...item,
          value: String(item.typeNum),
          label: '',
          sublabel: '',
          name: 'propensity',
        })),
      },
    ];
  }, [model, propensity, propensities]);

  const userInfoQuery = useGetUserInfoQuery();
  if (!userInfoQuery.isSuccess) return;
  const propensityObj = getPropensity(userInfoQuery.data.detail.propensity);
  return (
    <>
      <DescriptionBox
        title={t('portfolio.createTitle')}
        subtitle={[t('portfolio.createBreadcrumb')]}
      />
      <S.CreatePortfolioPageContainer
        onSubmit={handleSubmit}
        className="layout-padding"
      >
        <S.PropensityTitleText>
          {propensityObj && `당신의 투자성향은 ${propensityObj.name}입니다.`}
        </S.PropensityTitleText>
        {portfolios.map((group, groupIndex) => (
          <S.ModelContainer key={groupIndex}>
            <S.TitleText>{group.title}</S.TitleText>

            {groupIndex === 1 && propensityObj && (
              <S.TitleText>
                {propensityObj.name}은 위험자산의 비중을 최대{' '}
                {(1 - propensityObj.cashRatio) * 100}%까지 설정할 수 있습니다.
              </S.TitleText>
            )}

            {groupIndex === 0 ? (
              <S.GridContainer>
                {group.inputs.map((input, idx) => (
                  <Radio
                    {...input}
                    key={idx}
                    value={input.value}
                    label={
                      <Text
                        typograph="lg_bold"
                        color="Grey650"
                        style={{ marginLeft: '27px' }}
                      >
                        {input.label}
                        <br />
                        {input.sublabel}
                      </Text>
                    }
                  />
                ))}
              </S.GridContainer>
            ) : (
              <S.TableContainer>
                <S.CustomTableStyle>
                  <colgroup>
                    <col width={30}></col>
                    <col width={200}></col>
                    <col width={150}></col>
                    <col width={150}></col>
                  </colgroup>
                  <S.THead>
                    <S.Tr>
                      <S.Td></S.Td>
                      <S.Td></S.Td>
                      <S.Td>국내주식(위험자산)</S.Td>
                      <S.Td>현금(안정자산)</S.Td>
                    </S.Tr>
                  </S.THead>
                  <S.TBody>
                    {group.inputs.map((item, idx) => {
                      if (!('typeNum' in item)) return null;
                      const disabled = propensityObj
                        ? propensityObj.typeNum < item.typeNum
                        : true;
                      return (
                        <S.Tr key={idx}>
                          <S.Td>
                            <Radio
                              type="plain"
                              {...item}
                              value={item.typeNum.toString()}
                              disabled={disabled}
                            />
                          </S.Td>
                          <S.Td
                            style={{ color: disabled ? '#aaa' : undefined }}
                          >
                            {propensities[idx].name}
                          </S.Td>
                          <S.Td
                            style={{ color: disabled ? '#aaa' : undefined }}
                          >
                            {item.stockStr}
                          </S.Td>
                          <S.Td
                            style={{ color: disabled ? '#aaa' : undefined }}
                          >
                            {item.cashStr}
                          </S.Td>
                        </S.Tr>
                      );
                    })}
                  </S.TBody>
                </S.CustomTableStyle>
                <S.ResultButton type="submit">{t('portfolio.createButton')}</S.ResultButton>
              </S.TableContainer>
            )}
          </S.ModelContainer>
        ))}
      </S.CreatePortfolioPageContainer>
    </>
  );
};

export default CreatePortfolioPage;
