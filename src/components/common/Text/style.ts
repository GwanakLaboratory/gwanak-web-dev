import styled from '@emotion/styled';

import { COLOR, TYPOGRAPHY } from '../../../lib/constants';
import { ColorType, TypographyType } from '../../../lib/types';

export const S = {
  StyledText: styled.span<{
    typograph: TypographyType;
    color: ColorType;
  }>`
    ${({ typograph }) => TYPOGRAPHY[typograph]};
    color: ${({ color }) => COLOR[color]};
  `,
};
