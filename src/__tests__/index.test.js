import * as index from '../index';

describe('Greeter class', () => {
    it('should not throw', () => {
        expect(() => {
            index;
        }).not.toThrowError();
    });
});
