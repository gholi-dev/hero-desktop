import { Outlet } from 'react-router-dom';
import { NavContainer, NavFooter } from './navigation.styles';

const Navigation = () => {
  return (
    <NavContainer>
      <Outlet />
      <NavFooter>نسخه 1.0.7</NavFooter>
    </NavContainer>
  );
};

export default Navigation;
