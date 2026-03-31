import styled from '@emotion/styled';

export const S = {
  ModalOuterStyle: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
  `,
  ModalInnerStyle: styled.div`
    position: absolute;
    max-width: 540px;
    width: 90%;
    text-align: center;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;

    font-size: 2.4rem;
  `,
  ModalBodyStyle: styled.div`
    width: 100%;
    border-bottom: 2px solid #f2f2f2;
    padding: 30px 0px;
  `,
  ModalButtonConatiner: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2px;
    background-color: #f2f2f2;
    border-radius: 0px 0px 10px 10px;

    button:first-child {
      border-radius: 0px 0px 0px 10px;
    }
    button:last-child {
      border-radius: 0px 0px 10px 0px;
    }
  `,
  ModalButtonStyle: styled.button`
    flex: 1;
    background-color: #fff;
    border: none;
    font-size: 2.4rem;
    padding: 30px 0px;
    cursor: pointer;
  `,
};
