import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { useShowNavbar } from "../Hooks/useShowNavbar";
import { OpenSidebarProvider } from "../Context/OpenSidebar";

const MainLayout = () => {
  const { showNavbar } = useShowNavbar();
  return (
    <>
      {showNavbar && (
        <OpenSidebarProvider>
          <Navbar />
        </OpenSidebarProvider>
      )}
      <Outlet />
    </>
  );
};

export default MainLayout;
