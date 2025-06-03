import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export const useShowNavbar = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/login" || pathname === "/signup") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [pathname]);

  return { showNavbar };
};
