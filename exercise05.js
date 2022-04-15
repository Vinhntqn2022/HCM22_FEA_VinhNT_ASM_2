const inputNumbers = [1, 2, 3, 4];

function getSumOfArrayWithDoubleEven(numbers){
    return numbers.reduce((sum, number) => {
        if(number % 2 === 0){
            return sum + number * 2
        } else return sum + number
    }, 0)
}
console.log(getSumOfArrayWithDoubleEven(inputNumbers))