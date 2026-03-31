import LogoPNG from '../../../../lib/assets/images/logo_transparent.png';

const LandingFooter = () => {
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
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
        <a href="mailto:support@gwanaklab.co.kr">support@gwanaklab.co.kr</a>
      </div>
      <div>© 2026 GWANAK LAB. All rights reserved.</div>
    </footer>
  );
};

export default LandingFooter;
