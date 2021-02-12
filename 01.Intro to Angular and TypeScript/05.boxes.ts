class Box < T > {
    private elements: Array < T > ;

    constructor() {
        this.elements = [];
    }

    public get count(): number {
        return this.elements.length;
    }

    public add(element: T): void {
        this.elements.unshift(element);
    }

    public remove(): void {
        this.elements.shift();
    }
}

let box: Box < Number > = new Box < Number > ();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let box1: Box < String > = new Box < String > ();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count);
box1.remove();
console.log(box1.count);