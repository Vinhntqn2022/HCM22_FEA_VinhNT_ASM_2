const inputNumbers = [1, 2, 3 , 4];

function getSumOfArrayWithDoubleOddHalfEven(numbers) {
    return numbers.reduce((sum, number) => {
        if(number % 2 === 0) {
            return sum + number / 2;
        } else return sum + number * 2;
    }, 0)
}
console.log(getSumOfArrayWithDoubleOddHalfEven(inputNumbers))