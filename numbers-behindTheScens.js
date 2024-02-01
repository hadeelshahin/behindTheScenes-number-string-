//numbers
//in js everynumber is a float
//all numbers are represented as 64-bit floating-point values
//This means that even integers are stored as floating-point numbers
//
//The Number.MAX_SAFE_INTEGER constant in JavaScript represents the largest integer that can be safely represented without loss of precision

//Number global Object:
console.log(Number.MAX_VALUE); // Outputs: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Outputs: 5e-324
console.log(Number.NaN); // Outputs: NaN
console.log(Number.POSITIVE_INFINITY); // Outputs: Infinity
console.log(Number.NEGATIVE_INFINITY); // Outputs: -Infinity
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Math.pow(2, 53) - 1);

/******************************************************************************************* */
//(number).toString(radix(optional)):
//The toString method is used to convert a number to a string representation with an optional radix (base) parameter

let number = 42;

// Convert the number to a string in base 2 (binary)
let binaryString = number.toString(2);
console.log(binaryString); // Outputs: "101010"

// Convert the number to a string in base 8 (octal)
let octalString = number.toString(8);
console.log(octalString); // Outputs: "52"

// Convert the number to a string in base 16 (hexadecimal)
let hexString = number.toString(16);
console.log(hexString); // Outputs: "2a"

// Convert the number to a string in base 10 (decimal) - default
let decimalString = number.toString();
console.log(decimalString); // Outputs: "42"  //default===decimal

//ex:

console.log("*********************************************************");
const result = 0.2 + 0.4;
console.log(result); //0.6000000000000001
console.log(result === 0.6); //false
//convert number to binary

console.log((1).toString(2)); //toStraing(base)
console.log((5).toString(2));
for (let i = 0; i <= 15; i++) {
  console.log(i.toString(2));
}
console.log("*********************************************************");
const myResult = (0.2 + 0.4).toFixed(1);
console.log(myResult);
console.log(myResult === (0.6).toFixed(1)); //true
/******************************************************************************************* */
//(number).toFixed(digits)
/**Keep in mind that toFixed returns a string, not a number, and it rounds the number to the specified decimal places. If the number of decimal places is greater than the actual precision of the number, it will add trailing zeros.
 * If the number has more decimal places than specified, it rounds the number. */
let myNumber = 3.14159;

// Using toFixed to format with 2 decimal places
let formattedNumber = myNumber.toFixed(2);

console.log(formattedNumber); // Outputs: "3.14"

//to convert the resulting string back to a number using either the Number() constructor or the unary plus operator (+).
//ex:
// let myNumber = 3.14159;

// // Using toFixed to format with 2 decimal places and then converting it back to a number
// let formattedNumber = Number(myNumber.toFixed(2));

// console.log(formattedNumber); // Outputs: 3.14
// let myNumber = 3.14159;

// // Using toFixed to format with 2 decimal places and then converting it back to a number
// let formattedNumber = +myNumber.toFixed(2);

// console.log(formattedNumber); // Outputs: 3.14

/*******************************************************************************************/
////BigInt Type:
//integers that may exceed the safe range

let bigNumber = 1234567890123456789012345678901234567890n;

// Using BigInt and converting to regular number
let formattedn = Number(bigNumber);

console.log(formattedn); // Outputs: 1.2345678901234568e+39
let bigIntA = BigInt(10);
let bigIntB = BigInt(20);

let resultt = bigIntA + bigIntB;

console.log(resultt); // Outputs: 30n
/*******************************************************************************************/
const myinfinityNumber = 1 / 0;
console.log(myinfinityNumber); //Infinity
console.log(Number.isFinite(myinfinityNumber)); //false
console.log(Number.isFinite(10)); //true
