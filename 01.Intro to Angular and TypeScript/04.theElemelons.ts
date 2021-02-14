abstract class Melon {
    public weight: number;
    public melonSort: string;
    public element: string;

    constructor(
        weight: number,
        melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
        this.element = "";
    }

    public get elementIndex(): number {
        return this.weight * this.melonSort.length;
    }

    public toString(): string {
        return `Element: ${this.element}` +
            "\n" +
            `Sort: ${this.melonSort}` +
            "\n" +
            `Element Index: ${this.elementIndex}`;
    }
}

class Firemelon extends Melon {
    constructor(
        weight: number,
        melonSort: string) {
        super(weight, melonSort);
        this.element = 'Fire';
    }
}

class Earthmelon extends Melon {
    constructor(
        weight: number,
        melonSort: string) {
        super(weight, melonSort);
        this.element = 'Earth';
    }
}

class Airmelon extends Melon {
    constructor(
        weight: number,
        melonSort: string) {
        super(weight, melonSort);
        this.element = 'Air';
    }
}

class Watermelon extends Melon {
    constructor(
        weight: number,
        melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
    }
}

class Melolemonmelon extends Watermelon {
    private elements: Array < string > ;

    constructor(
        weight: number,
        melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
        this.elements = ['Fire', 'Earth', 'Air', 'Water'];
    }

    public morph(): void {
        var currentElement: string = this.elements.shift();
        this.element = currentElement;
        this.elements.push(currentElement);
    }
}

let watermelon: Watermelon = new Watermelon(12.5, 'Kingsize');
console.log(watermelon.toString());

let melolemonmelon: Melolemonmelon = new Melolemonmelon(12.5, 'Kingsize');
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