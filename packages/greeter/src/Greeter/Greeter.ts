interface Greeter {
    (): {
        sayHi: () => void;
    };
}

const Greeter: Greeter = () => {
    return {
        sayHi: (): void => console.log('Hello!'),
    };
};

export default Greeter;
