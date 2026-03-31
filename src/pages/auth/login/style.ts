import styled from '@emotion/styled';
import { AuthCard, AuthPageTitle, AuthSubtitle } from '../authSharedStyle';

export const S = {
  AuthCard,
  AuthPageTitle,
  AuthSubtitle,
  LoginForm: styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
  `,
  Field: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;
  `,
  Label: styled.label`
    font-size: 13px;
    font-weight: 600;
    color: #1a1d2b;
  `,
  AuthInput: styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 14px 16px;
    border-radius: 10px;
    border: 1px solid rgba(41, 86, 224, 0.08);
    font-size: 15px;
    font-weight: 400;
    font-family: 'Noto Sans KR', sans-serif;
    outline: none;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
    background: #fafbfe;
    color: #1a1d2b;

    &::placeholder {
      color: #9196ab;
    }

    &:focus {
      border-color: rgba(41, 86, 224, 0.45);
      box-shadow: 0 0 0 3px rgba(41, 86, 224, 0.06);
    }
  `,
  FieldError: styled.span`
    font-size: 12px;
    color: #d92d20;
    margin-top: -4px;
  `,
  LoginButton: styled.button<{ $active: boolean }>`
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
    margin: 24px 0 0;
    font-size: 14px;
    color: #5c6178;
    line-height: 1.5;

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
