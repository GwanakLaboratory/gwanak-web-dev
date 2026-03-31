import { forwardRef, JSX } from 'react';
import CheckedRadioSVG from '../../../lib/assets/images/ic_radio_checked.svg';
import UncheckedRadioSVG from '../../../lib/assets/images/ic_radio_unchecked.svg';
import { RadioButton, RadioContainer, RadioInput, RadioLabel } from './styles';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: JSX.Element | string;
  labelStyle?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large';
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ size = 'medium', label, labelStyle, ...props }, ref) => {
    return (
      <RadioContainer>
        <RadioInput type="checkbox" {...props} ref={ref} />
        <RadioButton className={size}>
          <img src={CheckedRadioSVG} className="checked" />
          <img src={UncheckedRadioSVG} className="unchecked" />
        </RadioButton>
        <RadioLabel style={labelStyle}>{label}</RadioLabel>
      </RadioContainer>
    );
  },
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
