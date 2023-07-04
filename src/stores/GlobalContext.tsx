import { createContext, ReactNode, useState } from 'react';

interface IGlobalState {
  selectedCompany: string;
  selectedStore: string;
}

const initialState: IGlobalState = { selectedCompany: '', selectedStore: '' };

const GlobalContext = createContext(initialState);

const DispatchGlobalContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSelectedCompany: (_value: string) => {
    //
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSelectedStore: (_value: string) => {
    //
  },
});

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IGlobalState>(initialState);

  const setSelectedCompany = (value: string) => {
    setData({ ...data, selectedCompany: value });
  };

  const setSelectedStore = (value: string) => {
    setData({ ...data, selectedStore: value });
  };

  return (
    <GlobalContext.Provider value={data}>
      <DispatchGlobalContext.Provider value={{ setSelectedCompany, setSelectedStore }}>
        {children}
      </DispatchGlobalContext.Provider>
    </GlobalContext.Provider>
  );
};

export { DispatchGlobalContext, GlobalContext, GlobalContextProvider };
