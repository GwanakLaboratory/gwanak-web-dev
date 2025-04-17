import styled from '@emotion/styled';
import { COLOR } from '../../../lib/constants';

export const S = {
  Input: styled.input`
    flex: 1;
    resize: none;
    padding: 8px 0;
    outline: none;
    border: 0px;

    width: 100%;
    font-size: 2rem;
    line-height: 120%;

    font-weight: 700;
    color: ${COLOR.Black};
    &::placeholder {
      color: ${COLOR.Grey600};
    }
  `,
};
