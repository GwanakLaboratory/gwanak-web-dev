import styled from '@emotion/styled';

export const AuthCard = styled.div`
  background: #fff;
  border-radius: 20px;
  border: 1px solid rgba(41, 86, 224, 0.1);
  box-shadow:
    0 4px 24px rgba(41, 86, 224, 0.06),
    0 1px 0 rgba(255, 255, 255, 0.8) inset;
  padding: 40px 36px 44px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 520px) {
    padding: 28px 22px 36px;
    border-radius: 16px;
  }
`;

export const AuthPageTitle = styled.h1`
  font-family: 'Outfit', 'Noto Sans KR', sans-serif;
  font-size: 1.65rem;
  font-weight: 800;
  color: #1a1d2b;
  letter-spacing: -0.03em;
  text-align: center;
  margin: 0 0 10px;
`;

export const AuthSubtitle = styled.p`
  font-size: 15px;
  line-height: 1.55;
  color: #5c6178;
  text-align: center;
  margin: 0 0 32px;
`;
