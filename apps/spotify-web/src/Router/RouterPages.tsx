import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Auth/Login";
import Home from "../Pages/Home";
import { GetLocalStorageDataProvider } from "../Context/GetLocalStorageDataContext";
import SignUp from "../Pages/Auth/SignUp";

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
        {
          path: "/signup",
          element: <SignUp />,
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
