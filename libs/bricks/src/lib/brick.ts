export interface BrickClass {
  render(): string;
}

export type BrickFn = () => Node;

export type Brick = BrickClass | BrickFn;
