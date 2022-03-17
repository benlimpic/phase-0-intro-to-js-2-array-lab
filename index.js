let cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => cats.push(name);

// const destructivelyAppendCat = (name) => {
//     cats.push(name);
//     return cats;
// }

// // function destructivelyAppendCat(name) {
// //   cats.push(name);
// //   return cats;
// // }

const destructivelyPrependCat = (name) => cats.unshift(name);

// const destructivelyPrependCat = (name) => {
//   cats.unshift(name);
//   return cats;
// };

// // function destructivelyPrependCat(name) {
// //   cats.unshift(name);
// //   return cats;
// // }

const destructivelyRemoveLastCat = () => cats.pop();

// const destructivelyRemoveLastCat = () => {
//     cats.pop();
//     return cats;
// }

// // function destructivelyRemoveLastCat() {
// //   cats.pop();
// //   return cats;
// // }

const destructivelyRemoveFirstCat = () => cats.shift();

// const destructivelyRemoveFirstCat = () => {
//     cats.shift();
//     return cats;
// }

// // function destructivelyRemoveFirstCat() {
// //   cats.shift();
// //   return cats;
// // }

const appendCat = (name) => [...cats, name];

// const appendCat = (name) => {
//   let newCats = [...cats, name];
//   return newCats;
// };

// // function appendCat(name) {
// //   let newCats = [...cats, name];
// //   return newCats;
// // }

const prependCat = (name) => [name, ...cats];

// const prependCat = (name) => {
//   let newCats = [name, ...cats];
//   return newCats;
// };

// function prependCat(name) {
//   let newCats = [name, ...cats];
//   return newCats;
// }

const removeLastCat = () => cats.slice(0, cats.length - 1);

// const removeLastCat = () => {
//   let newCats = cats.slice(0, cats.length - 1);
//   return newCats;
// };

// function removeLastCat() {
//   let newCats = cats.slice(0, cats.length - 1);
//   return newCats;
// }

const removeFirstCat = () => cats.slice(1);

// const removeFirstCat = () => {
//     let newCats = cats.slice(1);
//     return newCats;
// }

// function removeFirstCat() {
//     let newCats = cats.slice(1);
//     return newCats;
// }

console.log(cats);
