// Write a Javascript Program to check two numbers a return true if one of the number is 100 or if the sum of the two numbers is 100

function checkNumbers(firstNumber, secondNumber) {
  const isIt100 = firstNumber === 100 || secondNumber === 100;
  const sumOfNumbers = firstNumber + secondNumber === 100;
  return isIt100 || sumOfNumbers;
}

console.log(checkNumbers(100, 0));

// Write a Javascript program to get the extension of a filename.

const getFileExtension = (str) => {
  return str.slice(str.lastIndexOf("."));
};

console.log(getFileExtension("style.css"));
