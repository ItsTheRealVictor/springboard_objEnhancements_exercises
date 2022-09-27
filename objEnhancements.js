/*
Same keys and values
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
Same keys and values ES2015
Write an ES2015 Version 
*/

const createInstructor = (firstName, lastName) => ({
    firstName, lastName
})

// console.log(createInstructor('hank', 'hill'))


/*
Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
Computed Property Names ES2015
Write an ES2015 Version 
*/

let favoriteNumber = 42
let instructor = {
    firstName: 'colt'
}

instructor[favoriteNumber] = 'that is my favorite'
// console.log(instructor)

/*
createAnimal function
Write a function which generates an animal object. The function should accepts 3 arguments:

species: the species of animal (‘cat’, ‘dog’)
verb: a string used to name a function (‘bark’, ‘bleet’)
noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
Use one or more of the object enhancements we’ve covered.

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa" */

function createAnimal(species, verb, noise){
    return {
        species,
        [verb]: function(){
            return noise
        }
    }
}

const cat = createAnimal('cat', 'yell', 'meow')
console.log(cat)