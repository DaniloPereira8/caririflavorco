
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { 
  Cart, Checkout, CompletePayment, EditProduct, Home,
  Login, Menu, NewProduct, Orders, Products, Register,
} from "../containers";
import ClientOrdersPage from "../containers/pages/ClientOrdersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute isAdminRoute={false} />,
    children: [
      {
        path: "/",
        element: <UserLayout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/cardapio", element: <Menu /> },
          { path: "/carrinho", element: <Cart /> },
          { path: "/checkout", element: <Checkout /> },
          { path: "/complete", element: <CompletePayment /> },
          { path: "/meus-pedidos", element: <ClientOrdersPage /> },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <ProtectedRoute isAdminRoute={true} />,
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: "/admin/pedidos", element: <Orders /> },
          { path: "/admin/novo-produto", element: <NewProduct /> },
          { path: "/admin/editar-produto", element: <EditProduct /> },
          { path: "/admin/produtos", element: <Products /> },
        ],
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/cadastro", element: <Register /> },
]);