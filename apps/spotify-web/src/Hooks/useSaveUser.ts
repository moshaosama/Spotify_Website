import { useEffect } from "react";

const useSaveUser = () => {
  let User = null;
  const GetUser = window.localStorage.getItem("User");

  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const accessTokenCookie = cookies.find((row) =>
      row.startsWith("access_token=")
    );
    if (accessTokenCookie) {
      const userData = JSON.parse(
        decodeURIComponent(accessTokenCookie.split("=")[1])
      );
      window.localStorage.setItem("User", JSON.stringify(userData));
    }
  }, []);

  if (GetUser) {
    User = JSON.parse(GetUser);
  }

  const handleLogout = () => {
    window.localStorage.removeItem("User");
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  return { User, handleLogout };
};

export default useSaveUser;
