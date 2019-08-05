import { Greeter } from '../Greeter';

let outputData = '';
let storeLog = inputs => (outputData += inputs);

describe('Greeter class', () => {
    it('should not throw', () => {
        expect(() => {
            const greet = new Greeter();
            greet.sayHi();
        }).not.toThrowError();
    });
    it('should output Hello!', () => {
        console['log'] = jest.fn(storeLog);
        const greet = new Greeter();
        greet.sayHi();
        expect(outputData).toBe('Hello!');
    });
});
