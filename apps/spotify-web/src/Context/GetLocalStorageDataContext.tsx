import { createContext, useState, type ReactNode, useContext } from "react";

interface LocalStorageDataContextType {
  isGetToken: boolean;
  handleCheckIsToken: () => void;
  handleCloseMessage: () => void;
}

const GetLocalStorageDataContext = createContext<
  LocalStorageDataContextType | undefined
>(undefined);

export const GetLocalStorageDataProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isGetToken, setIsGetToken] = useState(false);

  const handleCheckIsToken = () => {
    const Token = window.localStorage.getItem("Token");
    if (Token) {
      setIsGetToken(false);
    }
    setIsGetToken(true);
  };

  const handleCloseMessage = () => {
    setIsGetToken(false);
  };

  return (
    <GetLocalStorageDataContext.Provider
      value={{ isGetToken, handleCheckIsToken, handleCloseMessage }}
    >
      {children}
    </GetLocalStorageDataContext.Provider>
  );
};

export const useGetLocalStorageData = () => {
  const context = useContext(GetLocalStorageDataContext);
  if (!context) {
    throw new Error(
      "useLocalStorageData must be used within a GetLocalStorageDataProvider"
    );
  }
  return context;
};
