var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.sayHello = function () {
        return this.name + ' says hi!';
    };
    return User;
}());
var user = new User('Misheto');
console.log(user.sayHello());
