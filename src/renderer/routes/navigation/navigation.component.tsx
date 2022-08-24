import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { NavContainer, NavFooter } from './navigation.styles';

const Navigation = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/auth');
  }, []);

  return (
    <NavContainer>
      <Outlet />
      <NavFooter>نسخه 1.0.7</NavFooter>
    </NavContainer>
  );
};

export default Navigation;
