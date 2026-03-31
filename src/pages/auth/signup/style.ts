import styled from '@emotion/styled';
import { AuthCard, AuthPageTitle, AuthSubtitle } from '../authSharedStyle';

export const S = {
  AuthCard,
  AuthPageTitle,
  AuthSubtitle,
  SignupForm: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    margin-bottom: 18px;
  `,
  Label: styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #1a1d2b;
  `,
  FieldError: styled.p`
    font-size: 12px;
    color: #d92d20;
    margin: 0;
    word-wrap: break-word;
  `,
  SignUpInput: styled.input`
    border-radius: 10px;
    border: 1px solid rgba(41, 86, 224, 0.08);
    padding: 12px 14px;
    font-size: 15px;
    font-weight: 400;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
    background: #fafbfe;
    color: #1a1d2b;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;

    &::placeholder {
      color: #9196ab;
    }

    &:focus {
      border-color: rgba(41, 86, 224, 0.45);
      box-shadow: 0 0 0 3px rgba(41, 86, 224, 0.06);
    }
  `,
  InputWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
  `,
  horizontalInput: styled.input`
    border-radius: 10px 0 0 10px;
    border: 1px solid rgba(41, 86, 224, 0.08);
    border-right: none;
    padding: 12px 14px;
    font-size: 15px;
    vertical-align: middle;
    width: 100%;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
    background: #fafbfe;
    color: #1a1d2b;

    &:focus {
      border-color: rgba(41, 86, 224, 0.45);
      z-index: 1;
    }
  `,
  horizontalButton: styled.button<{ $active: boolean }>`
    font-size: 13px;
    font-weight: 600;
    width: 120px;
    flex-shrink: 0;
    border: 1px solid rgba(41, 86, 224, 0.08);
    border-radius: 0 10px 10px 0;
    padding: 0 12px;
    background: ${(p) => (p.$active ? '#2956e0' : 'rgba(41, 86, 224, 0.08)')};
    color: ${(p) => (p.$active ? '#fff' : '#9196ab')};
    cursor: ${(p) => (p.$active ? 'pointer' : 'not-allowed')};
    font-family: 'Noto Sans KR', sans-serif;
    transition: background 0.2s, color 0.2s;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.65;
    }

    &:hover:not(:disabled) {
      background: ${(p) => (p.$active ? '#1d3fab' : 'rgba(41, 86, 224, 0.12)')};
    }
  `,
  InputErrorStyle: styled.p`
    font-size: 12px;
    color: #d92d20;
    word-wrap: break-word;
    margin: 4px 0 0;
  `,
  SubmitButton: styled.button<{ $active: boolean }>`
    width: 100%;
    margin-top: 8px;
    padding: 16px 20px;
    border-radius: 10px;
    border: none;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Noto Sans KR', 'Outfit', sans-serif;
    cursor: ${(p) => (p.$active ? 'pointer' : 'not-allowed')};
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
    background: ${(p) => (p.$active ? '#2956e0' : 'rgba(41, 86, 224, 0.12)')};
    color: ${(p) => (p.$active ? '#fff' : '#9196ab')};
    box-shadow: ${(p) =>
      p.$active ? '0 4px 16px rgba(41, 86, 224, 0.25)' : 'none'};

    &:hover {
      background: ${(p) => (p.$active ? '#1d3fab' : 'rgba(41, 86, 224, 0.12)')};
    }
  `,
  FooterLink: styled.p`
    text-align: center;
    margin: 20px 0 0;
    font-size: 14px;
    color: #5c6178;

    a {
      color: #2956e0;
      font-weight: 600;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  `,
};
