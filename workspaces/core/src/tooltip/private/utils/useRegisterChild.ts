import { useCallback, useReducer } from 'react';
import stateReducer from '../../../private/utils/stateReducer';

const useRegisterChild = () => {
  const [state, dispatch] = useReducer(stateReducer, {
    childrens: [],
  });
  const registerChild = useCallback((child: string) => {
    dispatch && dispatch({ type: 'RegisterChild', children: child });
    return () =>
      dispatch && dispatch({ type: 'UnregisterChild', children: child });
  }, []);
  return { state, registerChild };
};

export default useRegisterChild;
