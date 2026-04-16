import styled from '@emotion/styled';
import type { RenewalPillar } from '../renewal.types';

const Wrap = styled.div`
  max-width: 1200px;
  margin: -40px auto 0;
  padding: 0 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    padding: 0 24px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ $variant: RenewalPillar['variant'] }>`
  border-radius: 20px;
  padding: 32px 28px;
  transition: transform 0.3s;
  border: 1px solid
    ${({ $variant }) =>
      $variant === 'core' ? 'rgba(255,255,255,0.1)' : 'var(--border)'};
  background: ${({ $variant }) =>
    $variant === 'core'
      ? 'linear-gradient(135deg,#0a0f1e,#1a2340)'
      : 'var(--surface)'};
  color: ${({ $variant }) =>
    $variant === 'core' ? 'white' : 'var(--text-primary)'};

  &:hover {
    transform: translateY(-4px);
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const Badge = styled.span<{ $variant: RenewalPillar['variant'] }>`
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  letter-spacing: 0.5px;
  background: ${({ $variant }) => {
    if ($variant === 'core') return 'rgba(96,165,250,0.2)';
    if ($variant === 'surface') return 'var(--accent-light)';
    return '#f0fdf4';
  }};
  color: ${({ $variant }) => {
    if ($variant === 'core') return '#60a5fa';
    if ($variant === 'surface') return 'var(--accent)';
    return '#059669';
  }};
`;

const Sublabel = styled.span<{ $variant: RenewalPillar['variant'] }>`
  font-size: 12px;
  color: ${({ $variant }) =>
    $variant === 'core' ? 'rgba(255,255,255,0.4)' : 'var(--text-muted)'};
`;

const Title = styled.h3<{ $variant: RenewalPillar['variant'] }>`
  font-size: 19px;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
  line-height: 1.4;
  white-space: pre-line;
  color: ${({ $variant }) =>
    $variant === 'core' ? 'white' : 'var(--text-primary)'};
`;

const Desc = styled.p<{ $variant: RenewalPillar['variant'] }>`
  font-size: 13.5px;
  line-height: 1.6;
  word-break: keep-all;
  color: ${({ $variant }) =>
    $variant === 'core' ? 'rgba(255,255,255,0.6)' : 'var(--text-secondary)'};
`;

export type PillarsSectionProps = {
  pillars: RenewalPillar[];
};

function PillarsSection({ pillars }: PillarsSectionProps) {
  return (
    <Wrap>
      <Grid>
        {pillars.map((p) => (
          <Card key={p.id} $variant={p.variant}>
            <Row>
              <Badge $variant={p.variant}>{p.badge}</Badge>
              <Sublabel $variant={p.variant}>{p.sublabel}</Sublabel>
            </Row>
            <Title $variant={p.variant}>{p.title}</Title>
            <Desc $variant={p.variant}>{p.description}</Desc>
          </Card>
        ))}
      </Grid>
    </Wrap>
  );
}

export default PillarsSection;
