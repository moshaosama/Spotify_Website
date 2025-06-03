import { createContext, useContext, useState, type ReactNode } from "react";

interface OpenSidebarType {
  isOpenSidebar: boolean;
  handleTriggerSidebar: () => void;
}

const OpenSidebarContext = createContext<OpenSidebarType | undefined>(
  undefined
);

export const OpenSidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenSidebar, setIsSidebar] = useState<boolean>(false);

  const handleTriggerSidebar = () => {
    setIsSidebar(!isOpenSidebar);
  };

  return (
    <OpenSidebarContext.Provider
      value={{ isOpenSidebar, handleTriggerSidebar }}
    >
      {children}
    </OpenSidebarContext.Provider>
  );
};

export const useOpenSidebar = () => {
  const context = useContext(OpenSidebarContext);
  if (!context) {
    throw new Error("useOpenSidebar must be used within a OpenSidebarContext");
  }
  return context;
};
