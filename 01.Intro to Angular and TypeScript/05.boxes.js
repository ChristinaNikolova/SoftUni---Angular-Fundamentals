var Box = /** @class */ (function () {
    function Box() {
        this.elements = [];
    }
    Object.defineProperty(Box.prototype, "count", {
        get: function () {
            return this.elements.length;
        },
        enumerable: false,
        configurable: true
    });
    Box.prototype.add = function (element) {
        this.elements.unshift(element);
    };
    Box.prototype.remove = function () {
        this.elements.shift();
    };
    return Box;
}());
var box = new Box();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);
var box1 = new Box();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count);
box1.remove();
console.log(box1.count);
