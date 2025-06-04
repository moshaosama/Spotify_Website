import { useEffect, useState } from "react";
import useSaveUser from "./useSaveUser";

const useHaveUser = () => {
  const [isHaveUser, setIsHaveUser] = useState(false);
  const { User } = useSaveUser();
  useEffect(() => {
    if (User) {
      setIsHaveUser(true);
    } else {
      setIsHaveUser(false);
    }
  }, [User]);

  return { isHaveUser };
};

export default useHaveUser;
