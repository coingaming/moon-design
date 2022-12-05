type BottomsheetActions =
  | { type: 'RegisterChild'; children: string }
  | { type: 'RegisterDraghandleRef'; draghandleRef: HTMLDivElement }
  | { type: 'UnregisterChild'; children: string };

type StateProps = {
  bottomsheetChildren?: string[];
};

function stateReducer<T extends StateProps>(
  state: T,
  action: BottomsheetActions
) {
  switch (action.type) {
    case 'RegisterChild': {
      if (state.bottomsheetChildren?.includes(action.children)) return state;
      const currentChildren = state?.bottomsheetChildren || [];
      return {
        ...state,
        bottomsheetChildren: [...currentChildren, action.children],
      };
    }
    case 'RegisterDraghandleRef': {
      return { ...state, draghandleRef: action.draghandleRef };
    }
    case 'UnregisterChild': {
      return {
        ...state,
        bottomsheetChildren: state.bottomsheetChildren?.filter(
          (child) => child !== action.children
        ),
      };
    }
  }
}

export default stateReducer;
