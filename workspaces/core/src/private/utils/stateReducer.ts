type MenuItemActions =
  | { type: 'RegisterChild'; children: string }
  | { type: 'UnregisterChild'; children: string };

type StatesProps = {
  childrens?: string[];
};

function stateReducer<T extends StatesProps>(
  state: T,
  action: MenuItemActions
) {
  switch (action.type) {
    case 'RegisterChild': {
      if (state.childrens?.includes(action.children)) return state;
      const currentChildren = state?.childrens || [];
      return { ...state, childrens: [...currentChildren, action.children] };
    }
    case 'UnregisterChild': {
      return {
        ...state,
        childrens: state.childrens?.filter(
          (child) => child !== action.children
        ),
      };
    }
  }
}

export default stateReducer;
