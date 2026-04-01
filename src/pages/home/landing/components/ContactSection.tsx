import { useTranslation } from 'react-i18next';

type ContactSectionProps = {
  onContact: () => void;
};

const ContactSection = ({ onContact }: ContactSectionProps) => {
  const { t } = useTranslation();
  const titleLines = t('landing.contact.title').split('\n');

  return (
    <section className="cta-section" id="contact">
      <div className="reveal">
        <div className="section-label">{t('landing.nav.sections.contact')}</div>
        <h2 className="section-title">
          {titleLines[0]}
          <br />
          {titleLines[1]}
        </h2>
        <p className="section-desc">{t('landing.contact.description')}</p>
        <div className="cta-actions">
          <button className="btn-ghost" onClick={onContact}>
            {t('landing.contact.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
