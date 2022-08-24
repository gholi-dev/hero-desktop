import { ButtonContainer } from './button.styles';
import { buttonProps } from './button.type';

const Button = ({
  children,
  variant = 'standard',
  ...otherProps
}: buttonProps) => {
  return <ButtonContainer {...otherProps}>{children}</ButtonContainer>;
};

export default Button;
