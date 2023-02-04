const phones = [
    { name: "Samsung", camera: 12, storage: "32gb", price: 36000, color: "silver" },
    { name: "Walton", camera: 10, storage: "32gb", price: 22000, color: "silver" },
    { name: "iphone", camera: 27, storage: "32gb", price: 82000, color: "silver" },
    { name: "Xaomi", camera: 17, storage: "32gb", price: 52000, color: "silver" },
    { name: "Oppo", camera: 25, storage: "32gb", price: 20000, color: "silver" },
    { name: "Nokia", camera: 86, storage: "32gb", price: 44000, color: "silver" },
    { name: "HTC", camera: 10, storage: "32gb", price: 62000, color: "silver" },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
};

const mySelection = cheapestPhone(phones);
// console.log(mySelection);


// find highest resolution camera: practice:
function highestCamera(products) {
    let highest = products[0];
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.camera > highest.camera) {
            highest = product;
        }
    }
    return highest;
};

const highestResolution = highestCamera(phones);
console.log(highestResolution);