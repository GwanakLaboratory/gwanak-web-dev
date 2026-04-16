import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const Footer = styled.footer`
  padding: 48px 40px;
  border-top: 1px solid var(--border-light);
  background: var(--surface);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const Logo = styled.div`
  font-size: 15px;
  font-weight: 700;

  span {
    color: var(--accent);
  }
`;

const Copy = styled.div`
  font-size: 13px;
  color: var(--text-muted);
`;

export type RenewalFooterProps = {
  year?: number;
};

function RenewalFooter({
  year = new Date().getFullYear(),
}: RenewalFooterProps) {
  const { t } = useTranslation();

  return (
    <Footer>
      <Inner>
        <Logo>{t('landing.renewal.footer.brandLine')}</Logo>
        <Copy>© {year} GWANAK LAB. All rights reserved.</Copy>
      </Inner>
    </Footer>
  );
}

export default RenewalFooter;
