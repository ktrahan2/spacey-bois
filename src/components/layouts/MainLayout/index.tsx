import {Outlet} from 'react-router';
import {MainContainer} from './MainLayout.styles';

export const MainLayout = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};
