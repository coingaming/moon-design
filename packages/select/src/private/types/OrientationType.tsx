export enum Orientation {
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export type OrientationType = Orientation | keyof typeof Orientation;
