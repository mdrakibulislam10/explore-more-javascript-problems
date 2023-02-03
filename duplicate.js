const names = ["abul", "babul", "cabul", "dabul", "ebul", "babul", "abul", "kabul", "gabul", "cabul", "babul", "abul", "abul"];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);


// remove duplicate practice:
function deleteDuplicate(numbers) {
    // we can use let or const for push element
    const uniqueNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (uniqueNumbers.includes(number) === false) {
            uniqueNumbers.push(number);
        }
    }
    return uniqueNumbers;
};

const numbers = [2, 5, 6, 6, 4, 3, 2, 5, 8];
const singleNum = deleteDuplicate(numbers);
console.log(singleNum);