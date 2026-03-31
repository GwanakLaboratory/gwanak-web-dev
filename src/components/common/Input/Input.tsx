import { forwardRef } from 'react';
import { S } from './style';

export interface InputPropsType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  type?: string;
  defaultValue?: string | number | readonly string[] | null;
}

const Input = forwardRef<HTMLInputElement, InputPropsType>(
  ({ type = 'text', defaultValue, ...props }, ref) => {
    const safeDefaultValue = defaultValue === null ? undefined : defaultValue;
    return (
      <S.Input
        type={type}
        defaultValue={safeDefaultValue}
        {...props}
        ref={ref}
      />
    );
  },
);

Input.displayName = 'Input';
export default Input;
