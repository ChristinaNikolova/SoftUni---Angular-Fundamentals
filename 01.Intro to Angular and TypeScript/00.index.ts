class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public sayHello(): string {
        return `${this.name} says hi!`;
    }
}

const user: User = new User('Misheto');
console.log(user.sayHello());