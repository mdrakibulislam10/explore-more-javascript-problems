const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

// const partial = friends.splice(2, 5);
const partial = friends.splice(2, 5, 99, 555, 9999); // remove and add(insert)
console.log(partial);
console.log(friends);