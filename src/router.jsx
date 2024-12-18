import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import CategoryListPage from "./pages/catalog";
import CartPage from "./pages/cart";
import ProfilePage from "./pages/profile";
import SearchPage from "./pages/search";
import ProductDetailPage from "./pages/catalog/product-detail";
import ProductListPage from "./pages/catalog/product-list";
import Layout from "@/components/layout";
import ErrorPage from "./pages/error";
const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        handle: {
          logo: true,
        },
      },
      {
        path: "/categories",
        element: <CategoryListPage />,
        handle: {
          title: "Danh mục sản phẩm",
          back: false,
        },
      },
      {
        path: "/category/:id",
        element: <ProductListPage />,
        handle: {
          title: ({ categories, params }) =>
            categories.find((c) => c.id === Number(params.id))?.name,
        },
      },
      {
        path: "/cart",
        element: <CartPage />,
        handle: {
          title: "Giỏ hàng",
        },
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        handle: {
          logo: true,
        },
      },
      {
        path: "/search",
        element: <SearchPage />,
        handle: {
          title: "Tìm kiếm",
        },
      },
      {
        path: "/product/:id",
        element: <ProductDetailPage />,
        handle: {
          scrollRestoration: 0, // when user selects another product in related products, scroll to the top of the page
        },
      },
    ],
  },
],
{basename: window.APP_ID === undefined ? "/" : `/zapps/${window.APP_ID}`}
);
export default router;