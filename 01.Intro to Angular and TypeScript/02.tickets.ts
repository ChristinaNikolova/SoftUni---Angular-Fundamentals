class Ticket {
    public destination: string;
    public price: number;
    public status: string;

    constructor(
        destination: string,
        price: number,
        status: string
    ) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function solve(input: Array < string > , criteria: string) {
    var tickets: Array < Ticket > = [];

    for (const currentInput of input) {
        var tockens: Array < string > = currentInput.split("|");

        var currentDestination: string = tockens[0];
        var currentPrice: number = +tockens[1];
        var currentStatus = tockens[2];

        var ticket: Ticket = new Ticket(currentDestination, currentPrice, currentStatus);
        tickets.push(ticket);
    }

    if (criteria === 'destination') {
        tickets.sort((a, b) => {
            return a.destination.localeCompare(b.destination)
        });
    } else if (criteria === 'price') {
        tickets.sort((a, b) => {
            return a.price - b.price
        });
    } else if (criteria === 'status') {
        tickets.sort((a, b) => {
            return a.status.localeCompare(b.status)
        });
    }

    return tickets;
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'));

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'));