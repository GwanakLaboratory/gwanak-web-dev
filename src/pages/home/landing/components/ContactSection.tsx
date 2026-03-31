type ContactSectionProps = {
  onContact: () => void;
};

const ContactSection = ({ onContact }: ContactSectionProps) => {
  return (
    <section className="cta-section" id="contact">
      <div className="reveal">
        <div className="section-label">Contact</div>
        <h2 className="section-title">
          합리적인 의사결정,
          <br />
          지금 시작하세요.
        </h2>
        <p className="section-desc">
          개인 투자자는 GLAB으로, 기업은 맞춤 상담으로 시작할 수 있습니다.
        </p>
        <div className="cta-actions">
          <button className="btn-ghost" onClick={onContact}>
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
