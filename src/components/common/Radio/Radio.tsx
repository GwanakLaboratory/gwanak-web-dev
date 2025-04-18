import { forwardRef, JSX } from 'react';
import CheckedRadioSVG from '../../../lib/assets/images/ic_radio_checked.svg';
import CheckedPlainRadioSVG from '../../../lib/assets/images/ic_radio_plain_checked.svg';
import UncheckedRadioSVG from '../../../lib/assets/images/ic_radio_unchecked.svg';
import UnCheckedPlainRadioSVG from '../../../lib/assets/images/ic_radio_plan_unchecked.svg';
import { RadioButton, RadioContainer, RadioInput, RadioLabel } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: JSX.Element | string;
  value: string;
  type?: 'plain' | 'standard';
}

const Radio = forwardRef<HTMLInputElement, Props>(
  ({ label, type = 'standard', ...props }, ref) => {
    const checkedImage =
      type === 'standard' ? CheckedRadioSVG : CheckedPlainRadioSVG;
    const uncheckedImage =
      type === 'standard' ? UncheckedRadioSVG : UnCheckedPlainRadioSVG;

    return (
      <RadioContainer>
        <RadioInput type="radio" {...props} ref={ref} />
        <RadioButton>
          <img src={checkedImage} className="checked" />
          <img src={uncheckedImage} className="unchecked" />
        </RadioButton>
        <RadioLabel>{label}</RadioLabel>
      </RadioContainer>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
