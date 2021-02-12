var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }
    Employee.prototype.work = function () {
        var currentTask = this.tasks.shift();
        console.log(currentTask);
        this.tasks.push(currentTask);
    };
    Employee.prototype.collectSalary = function () {
        var salary = this.calculateSalary();
        return this.name + " received " + salary + " this month.";
    };
    Employee.prototype.calculateSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Junior = /** @class */ (function (_super) {
    __extends(Junior, _super);
    function Junior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(_this.name + " is working on a simple task.");
        return _this;
    }
    return Junior;
}(Employee));
var Senior = /** @class */ (function (_super) {
    __extends(Senior, _super);
    function Senior(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks.push(_this.name + " is working on a complicated task.");
        _this.tasks.push(_this.name + " is taking time off work.");
        _this.tasks.push(_this.name + " is supervising junior workers.");
        return _this;
    }
    return Senior;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.divident = 0;
        _this.tasks.push(_this.name + " scheduled a meeting.");
        _this.tasks.push(_this.name + " is preparing a quarterly report.");
        return _this;
    }
    Manager.prototype.calculateSalary = function () {
        return this.salary + this.divident;
    };
    return Manager;
}(Employee));
var junior = new Junior("Misho", 3);
console.log(junior);
junior.work();
junior.salary = 200;
junior.collectSalary();
var senior = new Senior("Plamen", 20);
senior.work();
senior.work();
senior.work();
senior.work();
senior.work();
senior.work();
var manager = new Manager("Hrisi", 20);
manager.work();
manager.work();
manager.work();
manager.work();
manager.work();
manager.work();
manager.divident = 100;
manager.salary = 200;
console.log(manager.collectSalary());
