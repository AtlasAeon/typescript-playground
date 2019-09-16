import Greeter from './Greeter';

const hello = Greeter();
hello.sayHi();
const doSomething = (g: number): ((f: number) => number) => (f: number): number => (g + 1) * f;
console.log(doSomething(5)(3));
