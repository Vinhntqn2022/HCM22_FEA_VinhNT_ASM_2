const inputAnimals = [
    {
        name: "cat",
        size: "small",
        weight: 5
    },
    {
        name: "dog",
        size: "medium",
        weight: 10
    },
    {
        name: "elepant",
        size: "big",
        weight: 5000
    }
]
function getAnimalsWeighedOver50(animals){
    return animals.filter(animal => {
        return animal.weight > 50 
    })
}
console.log(getAnimalsWeighedOver50(inputAnimals));
