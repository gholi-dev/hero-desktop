import liaraLogo from '../../assets/images/logo.svg';
import { ButtonContainer } from 'renderer/components/button/button.styles';
import { AuthContainer, LinkContainer } from './auth.styles';

const Auth = () => {
  return (
    <AuthContainer>
      <img src={liaraLogo} />
      <ButtonContainer>ورود با مرورگر</ButtonContainer>
      <LinkContainer to="/">.حساب ندارید؟ عضو شوید</LinkContainer>
    </AuthContainer>
  );
};

export default Auth;
