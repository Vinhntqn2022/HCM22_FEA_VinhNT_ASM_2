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
      name: "elephant",
      size: "big",
      weight: 5000
    }
  ]
function getAnimalInforString(animal) {
    return `name: ${animal.name} - size: ${animal.size} - weight: ${animal.weight} kg`
}
function getAnimalsHaveNameIncludeLetterT(animals) {
    return animals.filter(animal => {
        return animal.name.includes("t");
    })
}
function convertToStringArray(animals) {
    const filteredAnimals = getAnimalsHaveNameIncludeLetterT(animals);
    return filteredAnimals.map(animal => getAnimalInforString(animal));
}

console.log(convertToStringArray(inputAnimals))