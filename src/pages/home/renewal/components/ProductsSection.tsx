/**
 * ProductsSection — 비즈니스 섹션
 *
 * 레이아웃:
 * ┌─────────────────────────┬──────────────────────────────┐
 * │  [왼쪽 컬럼]             │  [오른쪽 컬럼]               │
 * │  ① B2B SaaS (상단)      │  ① GLAB B2C                 │
 * │  ② IT SI/SM (하단)      │  ② GlabChatDemo (하단)      │
 * └─────────────────────────┴──────────────────────────────┘
 */
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { renewalS } from '../renewalStyles';
import type { RenewalProductB2B, RenewalProductCard } from '../renewal.types';
import { LandingStylesBridge } from './LandingStylesBridge';
import GlabChatDemo from '../../landing/components/GlabChatDemo';

const { SectionTag, FadeBlock } = renewalS;

const Section = styled(FadeBlock)`
  padding: 120px 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    padding: 80px 24px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 16px;
  word-break: keep-all;
  white-space: pre-line;
`;

const Lead = styled.p`
  font-size: 17px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 60px;
  max-width: 640px;
  word-break: keep-all;
  white-space: pre-line;
`;

/* ── 최상위 2열 분할 ── */
const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* ── 왼쪽: B2B 메인 카드 + SI/SM 카드 세로 배치 ── */
const LeftStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* ── 오른쪽: GLAB 카드 + 채팅 데모 세로 배치 ── */
const RightStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/* ── 카드 공통 ── */
const Card = styled.div`
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 36px 32px;
  background: var(--surface);
  transition: all 0.3s;

  &:hover {
    border-color: var(--accent);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.06);
  }
`;

const ProductTag = styled.span<{
  $variant: 'b2b' | 'si' | 'b2c';
}>`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 6px;
  margin-bottom: 16px;
  background: ${({ $variant }) =>
    $variant === 'b2c'
      ? 'var(--accent, #1a56db)'
      : $variant === 'si'
        ? '#059669'
        : '#0a0f1e'};
  color: white;
`;

const ProductTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
`;

const ProductDesc = styled.p`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 24px;
  word-break: keep-all;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;

  &::before {
    content: '✓';
    color: var(--accent);
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }
`;

/* ── B2B 메인 카드 엔진 파이프라인 ── */
const PipelinePanel = styled.div`
  background: linear-gradient(145deg, #f8faff, #eef3fc);
  border-radius: 14px;
  padding: 22px;
  border: 1px solid var(--border-light);
  margin-top: 24px;
`;

const PipelineLabel = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const PipelineFlow = styled.div`
  display: flex;
  gap: 6px;
  align-items: stretch;
`;

const PipelineStep = styled.div`
  flex: 1;
  background: white;
  border-radius: 10px;
  padding: 12px 8px;
  text-align: center;
  border: 1px solid var(--border-light);
`;

const PipelineStepTitle = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

const PipelineStepSub = styled.div`
  font-size: 10px;
  color: var(--text-muted);
  margin-top: 3px;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  color: var(--border);
  font-size: 13px;
  flex-shrink: 0;
`;

/* ── GLAB 채팅 데모 래퍼 ── */
const ChatDemoCard = styled.div`
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 28px 28px 20px;
  background: var(--surface);
`;

const ChatDemoLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 16px;
`;

/* ────────────────────────────────────────────────────── */

export type ProductsSectionProps = {
  id?: string;
  tag: string;
  title: string;
  lead: string;
  productB2B: RenewalProductB2B;
  productCards: RenewalProductCard[];
};

function ProductsSection({
  id = 'products',
  tag,
  title,
  lead,
  productB2B,
  productCards,
}: ProductsSectionProps) {
  const { t } = useTranslation();

  const b2cCard = productCards.find((c) => c.variant === 'b2c');
  const siCard = productCards.find((c) => c.variant === 'si');

  return (
    <Section id={id} data-renewal-fade>
      <SectionTag>
        {t('landing.renewal.section.productsTag', { defaultValue: tag })}
      </SectionTag>
      <Title>
        {t('landing.renewal.section.productsTitle', { defaultValue: title })}
      </Title>
      <Lead>
        {t('landing.renewal.section.productsLead', { defaultValue: lead })}
      </Lead>

      <TwoCol>
        {/* ── 왼쪽: B2B SaaS (상단) + IT SI/SM (하단) ── */}
        <LeftStack>
          {/* B2B 메인 */}
          <Card>
            <ProductTag $variant="b2b">{productB2B.tag}</ProductTag>
            <ProductTitle>{productB2B.title}</ProductTitle>
            <ProductDesc>{productB2B.description}</ProductDesc>
            <Features>
              {productB2B.features.map((f) => (
                <Feature key={f.id}>{f.text}</Feature>
              ))}
            </Features>
            <PipelinePanel>
              <PipelineLabel>Engine Pipeline</PipelineLabel>
              <PipelineFlow>
                <PipelineStep>
                  <PipelineStepTitle>Predict</PipelineStepTitle>
                  <PipelineStepSub>상태 전이 예측</PipelineStepSub>
                </PipelineStep>
                <Arrow>→</Arrow>
                <PipelineStep>
                  <PipelineStepTitle>Structure</PipelineStepTitle>
                  <PipelineStepSub>리스크 구조화</PipelineStepSub>
                </PipelineStep>
                <Arrow>→</Arrow>
                <PipelineStep>
                  <PipelineStepTitle>Decide</PipelineStepTitle>
                  <PipelineStepSub>의사결정 도출</PipelineStepSub>
                </PipelineStep>
              </PipelineFlow>
            </PipelinePanel>
          </Card>

          {/* IT SI/SM */}
          {siCard && (
            <Card>
              <ProductTag $variant="si">{siCard.tag}</ProductTag>
              <ProductTitle>{siCard.title}</ProductTitle>
              <ProductDesc>{siCard.description}</ProductDesc>
              <Features>
                {siCard.features.map((f) => (
                  <Feature key={f.id}>{f.text}</Feature>
                ))}
              </Features>
            </Card>
          )}
        </LeftStack>

        {/* ── 오른쪽: GLAB B2C (상단) + 채팅 데모 (하단) ── */}
        <RightStack>
          {b2cCard && (
            <Card>
              <ProductTag $variant="b2c">{b2cCard.tag}</ProductTag>
              <ProductTitle>{b2cCard.title}</ProductTitle>
              <ProductDesc>{b2cCard.description}</ProductDesc>
              <Features>
                {b2cCard.features.map((f) => (
                  <Feature key={f.id}>{f.text}</Feature>
                ))}
              </Features>
            </Card>
          )}

          {/* GlabChatDemo — LandingStylesBridge로 CSS 클래스 주입 */}
          <ChatDemoCard>
            <ChatDemoLabel>
              {t('landing.service.demoTitle', {
                defaultValue: 'GLAB 대화 예시',
              })}
            </ChatDemoLabel>
            <LandingStylesBridge>
              <GlabChatDemo />
            </LandingStylesBridge>
          </ChatDemoCard>
        </RightStack>
      </TwoCol>
    </Section>
  );
}

export default ProductsSection;
