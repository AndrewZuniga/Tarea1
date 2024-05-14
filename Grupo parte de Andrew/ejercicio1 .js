const read = require ("prompt-sync")();
const write = console.log 


const a = 8;
const b = 5;

const v = 2 * b + Math.floor(a / 2) + 4 * b % a;

console.log(`The value of v is ${v}.`);     
