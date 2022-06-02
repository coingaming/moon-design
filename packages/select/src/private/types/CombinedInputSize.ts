export enum Size {
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge'
}

export type TextInputGroupSize = Size | keyof typeof Size;
