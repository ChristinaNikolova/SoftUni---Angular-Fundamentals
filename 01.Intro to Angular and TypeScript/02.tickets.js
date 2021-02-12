var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function solve(input, criteria) {
    var tickets = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var currentInput = input_1[_i];
        var tockens = currentInput.split("|");
        var currentDestination = tockens[0];
        var currentPrice = +tockens[1];
        var currentStatus = tockens[2];
        var ticket = new Ticket(currentDestination, currentPrice, currentStatus);
        tickets.push(ticket);
    }
    if (criteria === "destination") {
        tickets.sort(function (a, b) {
            return a.destination.localeCompare(b.destination);
        });
    }
    else if (criteria === "price") {
        tickets.sort(function (a, b) {
            return a.price - b.price;
        });
    }
    else if (criteria === "status") {
        tickets.sort(function (a, b) {
            return a.status.localeCompare(b.status);
        });
    }
    return tickets;
}
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));
console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status'));
