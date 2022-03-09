/**
 * Using the countries array create the following array of arrays.
 * The country name, the first three letters of the country name and
 * the length of the country name.
 */

const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

// console.log(createArrayOfArrays(countries));

function createArrayOfArrays(arr) {
  return arr.map((elem) => [
    elem,
    Array.from(elem).splice(0, 3).join(""),
    elem.length,
  ]);
}

// ##############################################################################


/**
 * Write a function which filter users who has scoresGreaterThan85, 
 * Write a function which addUser to the user array only if the user does not exist.
 * Write a function which addUserSkill which can add skill to a user only if the user exist.
 * Write a function which editUser if the user exist in the users array.
 */

 const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
 ];
 
 console.log(scoresGreaterThan85(users));

function scoresGreaterThan85(data) {
    return data.filter(({ scores }) => scores > 85)
}