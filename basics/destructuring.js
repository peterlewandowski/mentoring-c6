const student = {
    firstName: 'Wade',
    shirt: 'magenta',
    hair: 'red',
    glasses: true,
    height: 74,
}

const  { height, firstName, hair } = student

console.log(firstName, hair)

const alumni = ['Ashley', 'Peter', 'Sebas', 'Zhoupu', 'Aurelie', 'Matt']

const [ash, pet, seb] = alumni

console.log(seb, ash) // destructuring an array works in order of what's in the array
