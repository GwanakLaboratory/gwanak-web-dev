import ModalPortal from './ModalPortal';
import { S } from './style';

interface IModalProps {
  isOpen: boolean;
  onLogout: () => void;
  onClose: () => void;
}

const Modal = ({ isOpen, onLogout, onClose }: IModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <S.ModalOuterStyle>
        <S.ModalInnerStyle>
          <S.ModalBodyStyle>로그아웃 하시겠습니까?</S.ModalBodyStyle>
          <S.ModalButtonConatiner>
            <S.ModalButtonStyle style={{ color: 'red' }} onClick={onLogout}>
              로그아웃
            </S.ModalButtonStyle>
            <S.ModalButtonStyle onClick={onClose}>취소</S.ModalButtonStyle>
          </S.ModalButtonConatiner>
        </S.ModalInnerStyle>
      </S.ModalOuterStyle>
    </ModalPortal>
  );
};
export default Modal;
