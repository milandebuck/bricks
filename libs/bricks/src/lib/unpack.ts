import { BrickFn } from './brick';

export function unpack(elementSelector: string, app: BrickFn) {
  const root = document.querySelector(elementSelector);
  console.log(root, app());
  root.appendChild(app());
}
