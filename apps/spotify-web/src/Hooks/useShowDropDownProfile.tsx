import { useState } from "react";

const useShowDropDownProfile = () => {
  const [isShow, setIsShow] = useState(false);

  const handleTriggerShow = () => {
    setIsShow(!isShow);
  };

  return { isShow, handleTriggerShow };
};

export default useShowDropDownProfile;
