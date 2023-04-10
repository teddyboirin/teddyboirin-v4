import { createContext, useContext, useState } from 'react';

export const AppContext = createContext(null);

export const useApp = () => useContext(AppContext);

interface Props {
    children: JSX.Element;
}

export function AppProvider({ children }: Props) {
  const [isOpenContact, setIsOpenContact] = useState<boolean>(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    isOpenContact,
    setIsOpenContact,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
