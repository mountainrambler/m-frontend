// Här är lite kod till
// Lab 5. Enkel aritmetik

let nr1 = 23;
let nr2 = 44;

console.log(`Nr1 + Nr2 = ${nr1 + nr2}`);
console.log(`Nr1 - Nr2 = ${nr1 - nr2}`);
console.log(`Nr1*Nr2 = ${nr1 * nr2}`);

//Här följer labb 6

let myArray = [
    'Kalle',
    'Panna',
    'Lotta',
    'Lingon',
    'Svenne'
];
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.splice(1, 0, 'Snoriz');
console.log(myArray);
myArray.push('Joakim');
console.log(myArray);
myArray.sort();
console.log(myArray);
jockeIndex = myArray.indexOf('Joakim');
console.log('Jockes index:', jockeIndex);
myArray.splice(jockeIndex, 1);
console.log(myArray);

for (let names of myArray) {
    console.log(names)
};
console.log('Paus');

myArray.forEach(function (name, index) {
    console.log(`Name no. ${index + 1} is ${name}`);

});
