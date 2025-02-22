import {Outlet} from 'react-router';
import {MainContainer} from './styles';

export const MainLayout = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};
