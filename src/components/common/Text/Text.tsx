import React, { HTMLAttributes } from 'react';

import { S } from './style';
import { ColorType, TypographyType } from '../../../lib/types';

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color: ColorType;
  typograph: TypographyType;
}

const Text = ({ children, color, typograph, ...props }: TextProps) => {
  return (
    <S.StyledText {...props} color={color} typograph={typograph}>
      {children}
    </S.StyledText>
  );
};

export default Text;
