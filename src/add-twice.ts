import { add } from './add';
export function addTwice(a: number, b: number): number {
  return add(add(a, b), b);
}
