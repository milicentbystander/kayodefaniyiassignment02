// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
//const arrayOfNumbers = [68, -68, 27, 94, 72, -25, -51, 32, 10, 64, -94, 4, 34, -86, 90, 81, 20, -56, -91, -50];
// const length = arrayOfNumbers.length;
//let arrayOfNumbers = [];
let sum = 0;
function sumOfNumbers(arrayOfNumbers) {
  arrayOfNumbers.forEach (item => {
    sum+=item;
  })
  //forEach seems to execute faster!
  // for(let i = 0; i < length;
  //   sum+=arrayOfNumbers[i++]);
console.log(`The sum of the numbers in the given array is:`)
  return sum;   
}

   assignment.sumOfNumbers = sumOfNumbers;


/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;
}
// assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
//const celciusArray = [24, 30, 14, -8, 22, 17, -5, 25, 2, 25, 10, 10, 28, 33, 39, 28, 23, -1, 2, -4]
let fahrenheitArray = []
let fahrenheitValue;
function celsiusToFahrenheit(arrayOfNumbers) {
  
  arrayOfNumbers.forEach (item => {
   fahrenheitValue = (item*1.8)+32;
    fahrenheitArray.push(Math.trunc(fahrenheitValue));
  })


  console.log(`The Fahrenheit array derived from the given Celcius array is:`)
    
  return fahrenheitArray;
  
  
}



assignment.celsiusToFahrenheit = celsiusToFahrenheit;




// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

