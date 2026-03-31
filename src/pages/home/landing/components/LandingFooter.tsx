const LandingFooter = () => {
  return (
    <footer className="landing-footer">
      <div className="nav-logo" style={{ fontSize: 15 }}>
        관악연구소 <span style={{ fontSize: 9 }}>GWANAK LAB</span>
      </div>
      <div className="footer-links">
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
        <a href="mailto:gwanaklab@gmail.com">gwanaklab@gmail.com</a>
      </div>
      <div>© 2026 GWANAK LAB. All rights reserved.</div>
    </footer>
  );
};

export default LandingFooter;
