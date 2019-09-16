import add from '../add';

const subtract = (a: number): ((b: number) => number) => (b: number): number => add(a)(-b);

export default subtract;
