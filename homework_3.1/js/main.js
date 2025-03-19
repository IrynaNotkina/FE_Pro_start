let string = 'Words and synbols';
let integer = 33;
let float = 3.33;
let bigInteger = 333333333333333333333333333333333333333333333n;
let booleanTrue = true;
let booleanFalse = false;
let empty = null;
let notSet;
let unique = Symbol();
let someObject = {
    gender: 'woman',
    name: 'Pola',
    age: 30,
    married: true
};
let someArray = [1, true, 3.33, 'Olaf', empty, notSet];
let message = `Hi my name is ${someObject.name}, I am ${someObject.age} years old. I proud to be a ${someObject.gender}! And I am ${someObject.married ? "married" : "not married"}.`;

let string1 = 'The sky is blue';
let string2 = 'The sun is shining';
let string3 = 'I am happy';

let dummy = `${string3}. ${string1}. ${string2}.`;

console.log(string);
console.log(typeof (string));
console.log(integer);
console.log(typeof (integer));
console.log(float);
console.log(typeof (float));
console.log(bigInteger);
console.log(typeof (bigInteger));
console.log(booleanTrue);
console.log(typeof (booleanTrue));
console.log(booleanFalse);
console.log(typeof (booleanFalse));
console.log(empty);
console.log(typeof (empty));
console.log(notSet);
console.log(typeof (notSet));
console.log(unique);
console.log(typeof (unique));
console.log(someObject);
console.log(typeof (someObject));
console.log(someArray);
console.log(typeof (someArray));


console.log(message);
console.log(dummy);

let num = 92748;
let numStr = String(num);
let numStrsp = numStr.split('');
let num1 = numStrsp[0];
let num2 = numStrsp[1];
let num3 = numStrsp[2];
let num4 = numStrsp[3];
let num5 = numStrsp[4];
let result = `${num1} ${num2} ${num3} ${num4} ${num5}`

console.log(result);