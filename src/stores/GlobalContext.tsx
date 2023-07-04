import { createContext, ReactNode, useEffect, useReducer, useState } from 'react';

interface IGlobalState {
  companyList: string[];
  storeList: string[];
  selectedCompany: string;
  selectedStore: string;
}

export enum GlobalActionType {
  UPDATE_COMPANY_LIST = 'UPDATE_COMPANY_LIST',
  UPDATE_STORE_LIST = 'UPDATE_STORE_LIST',
  UPDATE_SELECTED_COMPANY = 'UPDATE_SELECTED_COMPANY',
  UPDATE_SELECTED_STORE = 'UPDATE_SELECTED_STORE',
}

type IGlobalAction = {
  type: GlobalActionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

interface IGlobalContext {
  globalState: IGlobalState;
  dispatch: React.Dispatch<IGlobalAction>;
}

const initialState: IGlobalState = {
  companyList: [],
  storeList: [],
  selectedCompany: '',
  selectedStore: '',
};

const GlobalContext = createContext<IGlobalContext>({
  globalState: initialState,
  dispatch: () => {
    //
  },
});

const GlobalReducer = (state: IGlobalState, action: IGlobalAction): typeof initialState => {
  switch (action.type) {
    case 'UPDATE_COMPANY_LIST': {
      return {
        ...state,
        companyList: action.payload,
      };
    }
    case 'UPDATE_STORE_LIST': {
      return {
        ...state,
        storeList: action.payload,
      };
    }
    case 'UPDATE_SELECTED_COMPANY': {
      return {
        ...state,
        selectedCompany: action.payload,
      };
    }
    case 'UPDATE_SELECTED_STORE': {
      return {
        ...state,
        selectedStore: action.payload,
      };
    }
    default:
      throw new Error();
  }
};

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<IGlobalState>(initialState);
  const [globalState, dispatch] = useReducer(GlobalReducer, data);

  useEffect(() => {
    // Fetch company list, store list first time
    setData(initialState);
  }, []);

  return <GlobalContext.Provider value={{ globalState, dispatch }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalContextProvider };
