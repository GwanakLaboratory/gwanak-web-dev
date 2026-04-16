import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { renewalS } from '../renewalStyles';
import type { RenewalSolutionItem } from '../renewal.types';
import RenewalNHero from './RenewalNHero';

const { SectionTag, FadeBlock } = renewalS;

const Section = styled(FadeBlock)`
  padding: 120px 40px;
  background: linear-gradient(180deg, var(--surface-alt), var(--bg));

  @media (max-width: 900px) {
    padding: 80px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  max-width: 640px;
  margin-bottom: 60px;
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
  word-break: keep-all;
  white-space: pre-line;
`;

/* ── Canvas 비주얼 전체 영역 ── */
const VisualBlock = styled.div`
  margin-bottom: 60px;
`;

/* ── 솔루션 카드 그리드 ── */
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
  padding: 36px 28px;
  transition: all 0.3s;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
  }
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: -0.3px;
`;

const Body = styled.p`
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.65;
  word-break: keep-all;
`;

export type SolutionSectionProps = {
  id?: string;
  tag: string;
  title: string;
  lead: string;
  items: RenewalSolutionItem[];
};

function SolutionSection({
  id = 'solution',
  tag,
  title,
  lead,
  items,
}: SolutionSectionProps) {
  const { t } = useTranslation();

  return (
    <Section id={id} data-renewal-fade>
      <Inner>
        <Header>
          <SectionTag>
            {t('landing.renewal.section.solutionTag', { defaultValue: tag })}
          </SectionTag>
          <Title>
            {t('landing.renewal.section.solutionTitle', {
              defaultValue: title,
            })}
          </Title>
          <Lead>
            {t('landing.renewal.section.solutionLead', { defaultValue: lead })}
          </Lead>
        </Header>

        {/* nhero-right 캔버스 비주얼 */}
        <VisualBlock>
          <RenewalNHero />
        </VisualBlock>

        {/* 솔루션 카드 */}
        <Grid>
          {items.map((item, i) => (
            <Card key={item.id}>
              <Icon
                style={{
                  background:
                    i === 0 ? '#eff6ff' : i === 1 ? '#f0fdf4' : '#fef3c7',
                }}
              >
                {item.icon}
              </Icon>
              <CardTitle>{item.title}</CardTitle>
              <Body>{item.body}</Body>
            </Card>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}

export default SolutionSection;
