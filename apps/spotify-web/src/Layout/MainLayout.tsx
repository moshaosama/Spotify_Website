import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { useShowNavbar } from "../Hooks/useShowNavbar";

const MainLayout = () => {
  const { showNavbar } = useShowNavbar();
  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default MainLayout;
