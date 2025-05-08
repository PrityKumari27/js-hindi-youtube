const name = "Prity"
const repoCount = 50
console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Prity-pk-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newStringOne = "     Prity      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https//prity.com/prity%20kumari"
console.log(url.replace('%20', '-'));
console.log(url.includes('prity'));
console.log(url.includes('prito'));

console.log(gameName.split('-'));














