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
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.element = "";
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Melon.prototype.toString = function () {
        return "Element: " + this.element +
            "\n" +
            ("Sort: " + this.melonSort) +
            "\n" +
            ("Element Index: " + this.elementIndex);
    };
    return Melon;
}());
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Fire";
        return _this;
    }
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Earth";
        return _this;
    }
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Air";
        return _this;
    }
    return Airmelon;
}(Melon));
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Water";
        return _this;
    }
    return Watermelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.element = "Water";
        _this.elements = ["Fire", "Earth", "Air", "Water"];
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        var currentElement = this.elements.shift();
        this.element = currentElement;
        this.elements.push(currentElement);
    };
    return Melolemonmelon;
}(Watermelon));
var watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
var melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
melolemonmelon.morph();
console.log(melolemonmelon.element);
melolemonmelon.morph();
console.log(melolemonmelon.element);
melolemonmelon.morph();
console.log(melolemonmelon.element);
melolemonmelon.morph();
console.log(melolemonmelon.element);
melolemonmelon.morph();
console.log(melolemonmelon.element);
