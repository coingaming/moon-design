export type ElixirThemeType =
  | 'aposta10'
  | 'bitcasino'
  | 'lab'
  | 'livecasino'
  | 'slots'
  | 'sportsbet';

export const elixirThemeKeys: ElixirThemeType[] = [
  'aposta10',
  'bitcasino',
  'lab',
  'livecasino',
  'slots',
  'sportsbet',
];

export interface StoreType {
  isElixir: boolean;
  elixirTheme: ElixirThemeType;
  isDarkMode: boolean;
}

export type ActionType =
  | { type: 'setIsElixir'; payload: boolean }
  | { type: 'setTheme'; payload: ElixirThemeType }
  | { type: 'setIsDarkMode'; payload: boolean };

export const initialState: StoreType = {
  isElixir: false,
  isDarkMode: false,
  elixirTheme: 'aposta10',
};

export const rootReducer = (
  state: StoreType,
  action: ActionType
): StoreType => {
  switch (action.type) {
    case 'setTheme': {
      return { ...state, elixirTheme: action.payload };
    }
    case 'setIsElixir': {
      return { ...state, isElixir: action.payload };
    }
    case 'setIsDarkMode': {
      return { ...state, isDarkMode: action.payload };
    }
    default:
      return state;
  }
};
