import LogoPNG from '../../../../lib/assets/images/logo_transparent.png';
import { useTranslation } from 'react-i18next';

const LandingFooter = () => {
  const { t } = useTranslation();

  return (
    <footer className="landing-footer">
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={LogoPNG}
          alt="GWANAK LAB logo"
          style={{ width: 160, height: 'auto', display: 'block' }}
        />
      </div>
      <div className="footer-links">
        <a href="#">{t('landing.footer.terms')}</a>
        <a href="#">{t('landing.footer.privacy')}</a>
        <a href="mailto:support@gwanaklab.co.kr">support@gwanaklab.co.kr</a>
      </div>
      <div>© 2026 GWANAK LAB. All rights reserved.</div>
    </footer>
  );
};

export default LandingFooter;
