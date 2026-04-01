import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import ModalPortal from '../../../../components/common/Modal/ModalPortal';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: rgba(26, 29, 43, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  font-family: 'Noto Sans KR', 'Outfit', sans-serif;
`;

const Panel = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fafbfe;
  border: 1px solid rgba(41, 86, 224, 0.12);
  border-radius: 14px;
  box-shadow: 0 20px 50px rgba(41, 86, 224, 0.12);
  padding: 28px 24px 22px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1d2b;
`;

const Body = styled.p`
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.55;
  color: #5c6178;
`;

const Email = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #2956e0;
  word-break: break-all;
  padding: 12px 14px;
  background: rgba(41, 86, 224, 0.06);
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Copied = styled.p`
  margin: 0 0 14px;
  font-size: 12px;
  color: #00a88a;
  min-height: 1.2em;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const Btn = styled.button`
  flex: 1;
  min-width: 120px;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  border: none;
  transition: filter 0.2s, background 0.2s;
`;

const BtnPrimary = styled(Btn)`
  background: #2956e0;
  color: #fff;
  &:hover {
    filter: brightness(1.05);
  }
`;

const BtnGhost = styled.a`
  flex: 1;
  min-width: 120px;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  background: #fff;
  color: #2956e0;
  border: 1px solid rgba(41, 86, 224, 0.22);
  transition: background 0.2s;
  &:hover {
    background: rgba(41, 86, 224, 0.06);
  }
`;

const BtnClose = styled(Btn)`
  flex: 1 1 100%;
  background: transparent;
  color: #5c6178;
  border: 1px solid rgba(26, 29, 43, 0.12);
  &:hover {
    background: rgba(26, 29, 43, 0.04);
  }
`;

type LandingContactModalProps = {
  isOpen: boolean;
  email: string;
  onClose: () => void;
  onCopy: () => Promise<void>;
};

const LandingContactModal = ({ isOpen, email, onClose, onCopy }: LandingContactModalProps) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    await onCopy();
    setCopied(true);
  };

  return (
    <ModalPortal>
      <Backdrop
        role="presentation"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <Panel role="dialog" aria-modal="true" aria-labelledby="landing-contact-title">
          <Title id="landing-contact-title">{t('landing.contact.modalTitle')}</Title>
          <Body>{t('landing.contact.modalBody')}</Body>
          <Email>{email}</Email>
          <Copied>{copied ? t('landing.contact.modalCopied') : '\u00a0'}</Copied>
          <Actions>
            <BtnPrimary type="button" onClick={() => void handleCopy()}>
              {t('landing.contact.modalCopy')}
            </BtnPrimary>
            <BtnGhost href={`mailto:${email}`}>
              {t('landing.contact.modalMail')}
            </BtnGhost>
            <BtnClose type="button" onClick={onClose}>
              {t('landing.contact.modalClose')}
            </BtnClose>
          </Actions>
        </Panel>
      </Backdrop>
    </ModalPortal>
  );
};

export default LandingContactModal;
