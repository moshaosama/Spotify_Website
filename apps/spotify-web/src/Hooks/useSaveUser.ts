import { useEffect } from "react";

const useSaveUser = () => {
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

  let User = null;
  const GetUser = window.localStorage.getItem("User");
  if (GetUser) {
    User = JSON.parse(GetUser);
  }

  return { User };
};

export default useSaveUser;
