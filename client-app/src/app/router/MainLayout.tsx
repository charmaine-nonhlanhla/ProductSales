import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../../features/Navigation/NavigationBar';

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {

  return (
    <div>
      <NavigationBar />
      {children || <Outlet />}
    </div>
  );
};