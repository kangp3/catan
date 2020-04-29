export interface AxialCoord {
  x: number;
  y: number;
}

export const keyFromCoord = (coord: AxialCoord): string =>
  `(${coord.x},${coord.y})`;
