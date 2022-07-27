export type PropType = {
  textAlign: ErrorPositions | keyof typeof ErrorPositions;
};

export enum ErrorPositions {
  left = 'left',
  center = 'center',
  right = 'right',
}
