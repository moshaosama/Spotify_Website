import { createContext, useContext, useState, type ReactNode } from "react";

interface SignUpContextData {
  isCreatePassword: boolean;
  handleTriggerCreatePassword: () => void;
  handleTriggerTellUsYoursef: () => void;
  isTellUsYoursef: boolean;
}

interface SignUpProviderProps {
  children: ReactNode;
}

const SignUpContext = createContext<SignUpContextData | null>(null);

export const SignUpProvider = ({ children }: SignUpProviderProps) => {
  const [isCreatePassword, setIsCreatePassword] = useState(false);
  const [isTellUsYoursef, setIsTellUsYoursef] = useState(false);

  const handleTriggerCreatePassword = () => {
    setIsCreatePassword(!isCreatePassword);
  };

  const handleTriggerTellUsYoursef = () => {
    setIsTellUsYoursef(!isTellUsYoursef);
  };

  return (
    <SignUpContext.Provider
      value={{
        isCreatePassword,
        handleTriggerCreatePassword,
        handleTriggerTellUsYoursef,
        isTellUsYoursef,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUpContext = () => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error("useSignUpContext must be used within a SignUpProvider");
  }
  return context;
};
