import {Outlet} from 'react-router';
import {MainContainer} from './index.styles';

export const MainLayout = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};
