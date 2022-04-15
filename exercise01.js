var inputNumbers = [1, 2, 3, 4];

function convertToArrayWithDoubleEvenElements(numbers) {
   return numbers.map(number => {
        if(number % 2 === 0){
            return number * 2;
        }else return number;
    })
}
console.log(convertToArrayWithDoubleEvenElements(inputNumbers));