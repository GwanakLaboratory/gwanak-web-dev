import styled from '@emotion/styled';
import { renewalS } from '../renewalStyles';
import type { RenewalTeamMember } from '../renewal.types';

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
  white-space: pre-line;
  word-break: keep-all;
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

const Card = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px 28px;
  transition: all 0.3s;

  &:hover {
    border-color: var(--accent);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const Avatar = styled.div<{ $gradient?: string; $index: number }>`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  color: white;
  background: ${({ $gradient, $index }) =>
    $gradient ||
    [
      'linear-gradient(135deg, #1a56db, #0ea5e9)',
      'linear-gradient(135deg, #7c3aed, #a78bfa)',
      'linear-gradient(135deg, #059669, #34d399)',
    ][$index % 3]};
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.3px;
`;

const Role = styled.div`
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 2px;
`;

const Desc = styled.div`
  font-size: 13.5px;
  color: var(--text-secondary);
  line-height: 1.6;
  word-break: keep-all;
`;

export type RenewalTeamSectionProps = {
  id?: string;
  tag: string;
  title: string;
  lead: string;
  members: RenewalTeamMember[];
};

function RenewalTeamSection({
  id = 'team',
  tag,
  title,
  lead,
  members,
}: RenewalTeamSectionProps) {
  return (
    <Section id={id} data-renewal-fade>
      <SectionTag>{tag}</SectionTag>
      <Title>{title}</Title>
      <Lead>{lead}</Lead>
      <Grid>
        {members.map((m, index) => (
          <Card key={m.id}>
            <Header>
              <Avatar $gradient={m.avatarGradient} $index={index}>
                {m.avatar}
              </Avatar>
              <div>
                <Name>{m.name}</Name>
                <Role>{m.role}</Role>
              </div>
            </Header>
            <Desc>{m.description}</Desc>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default RenewalTeamSection;
