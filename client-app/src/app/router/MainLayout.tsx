import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../features/Navigation/NavigationBar";
import { Taskbar } from "../../features/TaskBar/TaskBar";

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <NavigationBar />
      <Taskbar />
      {children || <Outlet />}
    </div>
  );
};
