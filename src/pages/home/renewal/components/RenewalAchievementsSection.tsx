import styled from '@emotion/styled';
import { renewalS } from '../renewalStyles';
import type { RenewalAchievement } from '../renewal.types';

const { SectionTag, FadeBlock } = renewalS;

const Section = styled(FadeBlock)`
  padding: 120px 40px;
  background: linear-gradient(135deg, #0a0f1e, #1a2340);
  color: white;

  @media (max-width: 900px) {
    padding: 80px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Tag = styled(SectionTag)`
  color: #60a5fa;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 60px;
  word-break: keep-all;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 32px 24px;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }
`;

const Icon = styled.div`
  font-size: 28px;
  margin-bottom: 16px;
`;

const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  letter-spacing: -0.3px;
  white-space: pre-line;
`;

const Desc = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.55;
  word-break: keep-all;
`;

export type RenewalAchievementsSectionProps = {
  id?: string;
  tag: string;
  title: string;
  items: RenewalAchievement[];
};

function RenewalAchievementsSection({
  id = 'achievements',
  tag,
  title,
  items,
}: RenewalAchievementsSectionProps) {
  return (
    <Section id={id} data-renewal-fade>
      <Inner>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
        <Grid>
          {items.map((item) => (
            <Card key={item.id}>
              <Icon>{item.icon}</Icon>
              <CardTitle>{item.title}</CardTitle>
              <Desc>{item.description}</Desc>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

export default RenewalAchievementsSection;
