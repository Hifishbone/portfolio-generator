// // command line argv
// var profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);

// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//     name: 'Lernantino',
//     age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';


// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//       console.log(profileDataArr[i]);
//     }
  
//     console.log('================');
  
//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//       console.log(profileItem)
//     });

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//   };
// printProfileData(profileDataArgs);


// // // Using function expression syntax
// // const addNums = function (numOne, numTwo) {
// //     return numOne + numTwo;
// // };

// // // Using new arrow function syntax
// // const addNums = (numOne, numTwo) => {
// //     return numOne + numTwo;
// // };

// // const addNums = (numOne, numTwo) => numOne + numTwo;

const generatePage = require('./src/page-template.js');

const fs = require('fs');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});