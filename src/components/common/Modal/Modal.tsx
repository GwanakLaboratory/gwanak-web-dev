import ModalPortal from './ModalPortal';
import { S } from './style';
import { useTranslation } from 'react-i18next';

interface IModalProps {
  isOpen: boolean;
  onLogout: () => void;
  onClose: () => void;
}

const Modal = ({ isOpen, onLogout, onClose }: IModalProps) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <S.ModalOuterStyle>
        <S.ModalInnerStyle>
          <S.ModalBodyStyle>{t('ui.logoutConfirm')}</S.ModalBodyStyle>
          <S.ModalButtonConatiner>
            <S.ModalButtonStyle style={{ color: 'red' }} onClick={onLogout}>
              {t('ui.logout')}
            </S.ModalButtonStyle>
            <S.ModalButtonStyle onClick={onClose}>{t('ui.cancel')}</S.ModalButtonStyle>
          </S.ModalButtonConatiner>
        </S.ModalInnerStyle>
      </S.ModalOuterStyle>
    </ModalPortal>
  );
};
export default Modal;
