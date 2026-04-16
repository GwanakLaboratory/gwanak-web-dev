import styled from '@emotion/styled';

const Bar = styled.div`
  padding: 48px 40px;
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
  background: var(--surface);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 28px;
`;

const Logos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  opacity: 0.55;

  @media (max-width: 900px) {
    gap: 24px;
  }
`;

const LogoText = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.3px;
  white-space: nowrap;
`;

export type TrustBarSectionProps = {
  /** 기본: 협력 · 연계 기관 */
  label?: string;
  partners: string[];
};

function TrustBarSection({
  label = '협력 · 연계 기관',
  partners,
}: TrustBarSectionProps) {
  return (
    <Bar>
      <Inner>
        <Label>{label}</Label>
        <Logos>
          {partners.map((name) => (
            <LogoText key={name}>{name}</LogoText>
          ))}
        </Logos>
      </Inner>
    </Bar>
  );
}

export default TrustBarSection;
