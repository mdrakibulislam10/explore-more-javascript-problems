/* 
1. if ticket numbers is less than 100, per ticket price: 100tk
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100tk/ticket and rest tickets will be 90tk/ticket.
   first 100 >>> 100tk
   (rest)101 - 200 >>> 90tk
3. if you more than purchase 200 tickets,
   first 100 >>> 100tk
   101 - 200 >>> 90tk
   200+ >>> 70tk
*/

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const rest100Rate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }

    else if (ticketQuantity <= 200) { // 101-200
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
        // return first100Price + restTicketPrice;
    }

    else { // 200+
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * rest100Rate;
        const totalPrice = first100Price + second100Price + restTicketPrice;
        return totalPrice;
        // return first100Price + second100Price + restTicketPrice;
    }
};

const price = ticketPrice(250);
console.log("total price:", price);