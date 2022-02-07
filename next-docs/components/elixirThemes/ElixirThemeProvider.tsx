import { FC, createContext, useReducer, Dispatch } from 'react';

import { rootReducer, initialState, StoreType, ActionType } from './store';

export interface StoreContextProps {
  state: StoreType;
  dispatch: Dispatch<ActionType>;
}

export const store = createContext<StoreContextProps>({
  state: initialState,
  dispatch: () => {},
});
const { Provider } = store;

export const ElixirThemeProvider: FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
