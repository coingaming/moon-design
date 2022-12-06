type BottomSheetActions =
  | { type: 'RegisterChild'; children: string }
  | { type: 'RegisterDraghandleRef'; draghandleRef: HTMLDivElement }
  | { type: 'UnregisterChild'; children: string };

type StateProps = {
  bottomSheetChildren?: string[];
};

function stateReducer<T extends StateProps>(
  state: T,
  action: BottomSheetActions
) {
  switch (action.type) {
    case 'RegisterChild': {
      if (state.bottomSheetChildren?.includes(action.children)) return state;
      const currentChildren = state?.bottomSheetChildren || [];
      return {
        ...state,
        bottomSheetChildren: [...currentChildren, action.children],
      };
    }
    case 'RegisterDraghandleRef': {
      return { ...state, draghandleRef: action.draghandleRef };
    }
    case 'UnregisterChild': {
      return {
        ...state,
        bottomSheetChildren: state.bottomSheetChildren?.filter(
          (child) => child !== action.children
        ),
      };
    }
  }
}

export default stateReducer;
