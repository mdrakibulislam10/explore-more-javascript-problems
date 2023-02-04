function triangleArea(side1, side2, side3) {
    // check it is a triangle or not;
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        const semiPerimeter = (side1 + side2 + side3) / 2;
        const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
        return area;
    }
    // else {
    return "the given sides can't form a triangle";
    // }
};

const area = triangleArea(3, 4, 5);
console.log(area);