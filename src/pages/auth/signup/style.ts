import styled from '@emotion/styled';
import Input from '../../../components/common/Input';

export const S = {
  SignupContainer: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 30px;
    margin: 50px 0px;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 35%;
    min-width: 350px;
  `,
  InputWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  `,
  InputErrorStyle: styled.p`
    font-size: 12px;
    color: #ff0000;
    word-wrap: break-word;
  `,

  SignUpInput: styled(Input)`
    border-radius: 5px;
    border: 1px solid #eaeaea;
    padding: 10px;
    font-size: 1.4rem;
    width: 100%;
    outline: none;
  `,

  horizontalInput: styled.input`
    border-radius: 5px 0px 0px 5px;
    border: 1px solid #eaeaea;
    padding: 10px 10px;
    font-size: 14px;
    vertical-align: middle;
    width: 100%;
    outline: none;
  `,

  horizontalButton: styled.button<{ flag: boolean }>`
    font-size: 14px;
    width: 140px;
    border: none;
    padding: 12px 24px;
    border-radius: 0px 5px 5px 0px;
    background: ${(props) => (props.flag ? '#474747' : '#eaeaea')};
    transform: translateX(-1px);
    color: ${(props) => (props.flag ? '#fff' : '#ccc')};
    cursor: pointer;
  `,
  LoginButton: styled.button<{ flag: boolean }>`
    width: 100%;
    max-width: 800px;
    background-color: ${(props) => (props.flag ? '#474747' : '#f2f2f2')};
    color: ${(props) => (props.flag ? '#ffffff' : '#aaaaaa')};
    font-size: 2.5rem;
    text-align: center;
    padding: 20px 0px;
    border: none;

    cursor: pointer;
  `,
};
