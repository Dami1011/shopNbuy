import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductDetails, Root, Error } from "../components";
import {
  Home,
  Collections,
  Categories,
  Bag,
  Checkout,
  Account,
  Orders,
  OrderId,
  Profile,
  ShopOrder,
  ManageProduct,
  CreateProduct,
  SavedItems,
  Search,
} from "../pages";
import ProtectedRoutes from "./ProtectedRoutes";

export default function Routespath() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "collections",
          element: <Collections />,
          children: [
            {
              path: ":collectionName",
              element: <Categories />,
            },
            {
              path: ":collectionName/:slug",
              element: <ProductDetails />,
            },
          ],
        },
        {
          path: "Bag",
          element: <Bag />,
        },
        {
          path: "Checkout",
          element: <Checkout />,
        },
        {
          path: "search",
          element: <Search />,
        },
        {
          path: "account",
          element: (
            <ProtectedRoutes>
              <Account />
            </ProtectedRoutes>
          ),
          children: [
            {
              path: ":username/orders",
              element: <Orders />,
              children: [
                {
                  path: ":orderId",
                  element: <OrderId />,
                },
              ],
            },
            {
              path: ":username/saveditems",
              element: <SavedItems />,
            },
            {
              path: ":user-profile/:username",
              element: <Profile />,
            },
            {
              path: "allorders",
              element: <ShopOrder />,
            },
            {
              path: "manage-product",
              element: <ManageProduct />,
            },
            {
              path: "add-new-product",
              element: <CreateProduct />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
