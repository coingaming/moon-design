export type AuthCodeTextSizes = 'sm' | 'md' | 'lg' | 'xl' | string;

export type AuthCodeRef = {
  focus: () => void;
  clear: () => void;
};
