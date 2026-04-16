import styled from '@emotion/styled';
import { renewalS } from '../renewalStyles';

const { BtnPrimary, BtnSecondary } = renewalS;

const Section = styled.section`
  padding: 120px 40px;
  text-align: center;
  background: var(--surface-alt);
`;

const Inner = styled.div`
  max-width: 600px;
  margin: 0 auto;
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
  margin-bottom: 36px;
  word-break: keep-all;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

export type RenewalCtaSectionProps = {
  id?: string;
  title: string;
  lead: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

function RenewalCtaSection({
  id = 'contact',
  title,
  lead,
  primaryHref,
  primaryLabel,
  secondaryHref = '#',
  secondaryLabel = '기술 소개서 다운로드',
}: RenewalCtaSectionProps) {
  return (
    <Section id={id}>
      <Inner>
        <Title>{title}</Title>
        <Lead>{lead}</Lead>
        <Actions>
          <BtnPrimary href={primaryHref}>{primaryLabel}</BtnPrimary>
          <BtnSecondary href={secondaryHref}>{secondaryLabel}</BtnSecondary>
        </Actions>
      </Inner>
    </Section>
  );
}

export default RenewalCtaSection;
