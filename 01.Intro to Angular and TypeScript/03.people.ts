abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array < string > ;

    constructor(
        name: string,
        age: number
    ) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        var currentTask: string = this.tasks.shift();
        console.log(currentTask);
        this.tasks.push(currentTask);
    }

    public collectSalary(): string {
        var salary: number = this.calculateSalary();
        return `${this.name} received ${salary} this month.`;
    }

    public calculateSalary(): number {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(
        name: string,
        age: number) {
        super(name, age);
        this.tasks.push(`${this.name} is working on a simple task.`);
    }
}

class Senior extends Employee {
    constructor(
        name: string,
        age: number) {
        super(name, age);
        this.tasks.push(`${this.name} is working on a complicated task.`);
        this.tasks.push(`${this.name} is taking time off work.`);
        this.tasks.push(`${this.name} is supervising junior workers.`);
    }
}

class Manager extends Employee {
    public divident: number;

    constructor(
        name: string,
        age: number) {
        super(name, age);
        this.divident = 0;
        this.tasks.push(`${this.name} scheduled a meeting.`);
        this.tasks.push(`${this.name} is preparing a quarterly report.`);
    }

    public calculateSalary(): number {
        return this.salary + this.divident;
    }
}

var junior: Junior = new Junior('Misho', 3);
console.log(junior);
junior.work();
junior.salary = 200;
junior.collectSalary();

var senior: Senior = new Senior('Plamen', 20);
senior.work();
senior.work();
senior.work();
senior.work();
senior.work();
senior.work();

var manager: Manager = new Manager('Hrisi', 20);
manager.work();
manager.work();
manager.work();
manager.work();
manager.work();
manager.work();
manager.divident = 100;
manager.salary = 200;
console.log(manager.collectSalary());