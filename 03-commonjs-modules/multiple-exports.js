const myName = 'Andrey';
const myHobbies = ['swimming', 'boxing', 'cycling'];
const myFavoriteNumber = 17;

console.log('Text from the multiple-exports CommonJS module');

module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
