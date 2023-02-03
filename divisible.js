/* 
show output from 1-50;
if number is divisible by 3 then, show output is "foo"
if number is divisible by 5 then, show output is "bar"
if number is divisible by 3 then, show output is "foobar"
if number is not divisible by 3 or 5 then, show output is the number.
*/

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log("foobar");
    }
    else if (i % 3 === 0) {
        // console.log("foo");
    }
    else if (i % 5 === 0) {
        // console.log("bar")
    }
    else {
        // console.log(i);
    }
};


// with function:
function fooAndBar(number) {
    let foobar = [];
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            foobar.push("foobar");
        }
        else if (i % 3 === 0) {
            foobar.push("foo");
        }
        else if (i % 5 === 0) {
            foobar.push("bar");
        }
        else {
            foobar.push(i);
        }
    }
    // const myFoobar = foobar.join("✔️  ");
    const myFoobar = foobar.join(" ");
    return myFoobar;
};
console.log(fooAndBar(100));