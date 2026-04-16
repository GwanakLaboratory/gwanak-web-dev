import styled from '@emotion/styled';
import { renewalS } from '../renewalStyles';
import type { RenewalStatCard } from '../renewal.types';

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
  line-height: 1.35;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div<{ $highlight?: boolean }>`
  background: ${({ $highlight }) =>
    $highlight
      ? 'linear-gradient(135deg, #0a0f1e, #1a2340)'
      : 'var(--surface)'};
  border: 1px solid
    ${({ $highlight }) => ($highlight ? 'transparent' : 'var(--border)')};
  border-radius: 20px;
  padding: 36px 28px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  color: ${({ $highlight }) => ($highlight ? 'white' : 'inherit')};

  &:hover {
    border-color: ${({ $highlight }) =>
      $highlight ? 'transparent' : 'var(--accent)'};
    transform: translateY(-3px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
  }
`;

const StatNumber = styled.div<{ $highlight?: boolean }>`
  font-size: 28px;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -2px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: 4px;
  white-space: pre-line;
  background: ${({ $highlight }) =>
    $highlight ? 'linear-gradient(135deg, #60a5fa, #38bdf8)' : 'none'};
  -webkit-background-clip: ${({ $highlight }) =>
    $highlight ? 'text' : 'unset'};
  -webkit-text-fill-color: ${({ $highlight }) =>
    $highlight ? 'transparent' : 'inherit'};
  background-clip: ${({ $highlight }) => ($highlight ? 'text' : 'unset')};
`;

const StatLabel = styled.div<{ $highlight?: boolean }>`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: -0.3px;
  margin-top: 12px;
  color: ${({ $highlight }) =>
    $highlight ? 'rgba(255,255,255,0.6)' : 'inherit'};
`;

const StatDesc = styled.div<{ $highlight?: boolean }>`
  font-size: 13.5px;
  line-height: 1.6;
  word-break: keep-all;
  color: ${({ $highlight }) =>
    $highlight ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)'};
`;

export type ProblemSectionProps = {
  id?: string;
  tag: string;
  title: string;
  lead: string;
  stats: RenewalStatCard[];
};

function ProblemSection({
  id = 'problem',
  tag,
  title,
  lead,
  stats,
}: ProblemSectionProps) {
  return (
    <Section id={id} data-renewal-fade>
      <SectionTag>{tag}</SectionTag>
      <Title>{title}</Title>
      <Lead>{lead}</Lead>
      <Grid>
        {stats.map((s) => (
          <StatCard key={s.id} $highlight={s.highlight}>
            <StatNumber $highlight={s.highlight}>{s.number}</StatNumber>
            <StatLabel $highlight={s.highlight}>{s.label}</StatLabel>
            <StatDesc $highlight={s.highlight}>{s.description}</StatDesc>
          </StatCard>
        ))}
      </Grid>
    </Section>
  );
}

export default ProblemSection;
