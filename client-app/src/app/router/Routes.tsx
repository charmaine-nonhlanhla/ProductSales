import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../../features/Home/HomePage";
import ProductsPage from "../../features/Products/ProductsPage";
import { NavigationBar } from "../../features/Navigation/NavigationBar";
import { MainLayout } from "./MainLayout";

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '', 
        element: <MainLayout />,
        children: [
          { path: 'home', element: <HomePage /> },
          { path: 'products', element: <ProductsPage /> },
          { path: '*', element: <Navigate to="/" /> }
        ]
      },
    ]
  }
];

export const router = createBrowserRouter(routes);
