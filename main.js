//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds
const evenArr =[2,4,6,8,10]
const oddArr =[1,3,5,7,9]
const newArr = [...evenArr,...oddArr]
console.log(newArr)


//Exercise #2
// Define an object favoriteFoods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built

const favoriteFoods = {
    myFood:'chicken & fried rice',
    myRestaurant:'chinese restaurant',
}
const friendFavoriteFoods = {
    theirFood:'ox tails',
    theirRestaurant:'jamaican restaurant',
}
const allFoods = {
    ...favoriteFoods,
    ...friendFavoriteFoods,
}
console.log(allFoods)

// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown
// Use destructuring to extract all three keys into variables
// log all three variables
// Use the spread operator to extract two of the keys but not the third
// store and log this new set of variables
// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name 
const movieActress = {
    fullName:'Scarlet Johansson',
    age:'36',
    hometown:'Manhattan, New York', 
}
const{fullName,age,hometown} = movieActress;
console.log(fullName)
console.log(age)
console.log(hometown)

let pet = {}
movieActress = {...movieActress,pet};
let name = "black Widow";
let petAge = 4;
let breed = "ninja cat"

movieActress.pet.Name = Name;
movieActress.pet.petAge = Age;
movieActress.pet.Breed = breed;

console.log(pet.Name);