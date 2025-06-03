import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home";
import { GetLocalStorageDataProvider } from "../Context/GetLocalStorageDataContext";

const RouterPages = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: (
            <GetLocalStorageDataProvider>
              <Home />
            </GetLocalStorageDataProvider>
          ),
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
};

export default RouterPages;
