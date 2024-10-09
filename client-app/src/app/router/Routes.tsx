import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../../features/Home/HomePage";
import ProductsPage from "../../features/Products/ProductsPage";
import { MainLayout } from "./MainLayout";
import SalesPage from "../../features/Product Sales/SalesPage";
import LoginPage from "../../features/Login/LoginPage";
import RegistrationPage from "../../features/Registration/RegistrationPage";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '', 
        element: <MainLayout />,
        children: [
          { path: '', element: <HomePage /> },
          { path: 'products', element: <ProductsPage /> },
          { path: 'sales', element: <SalesPage /> },
          { path: '*', element: <Navigate to="/" /> }
        ]
      },

      {path: 'login', element: <LoginPage /> },
      {path: 'register', element: <RegistrationPage /> }
    ]
  }
];

export const router = createBrowserRouter(routes);
