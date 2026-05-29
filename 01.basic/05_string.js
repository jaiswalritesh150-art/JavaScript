const name = "ritesh";
const repocount = 8;

//console.log(name + repocount + " value"); 

//console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('ritesh-ja-is');

// console.log(gamename[2]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());

const newString = gamename.substring(0,4);
//console.log(newString);

const anotherString = gamename.substring(-6,4);
//console.log(anotherString);

const newStringone = '     ritesh     '
console.log(newStringone);
console.log(newStringone.trim());


const url = 'https://ritesh.com/ritesh%20jaiswal'

console.log(url.replace('%20','_'));

console.log(url.includes('jais'))

console.log(gamename.split('-'));