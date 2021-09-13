/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

const sum = function (a, b) {
  if (a === b) {
    return (a + b) * 3;
  } else {
    return a + b;
  }
};

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const isFifty = function (a, b) {
  if (a === 50 || b === 50 || a + b === 50) {
    return true;
  } else {
    return false;
  }
};

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

const removeChar = function (str, pos) {
  return str.slice(0, pos) + str.slice(pos + 1);
};
//console.log(removeChar("strive", 3));

/* 4. Create a function to find and return the largest of three given integers. */

const findLargestInt = function (...args) {
  const sorted = args.sort((a, b) => b - a);
  return sorted[0];
};

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
    Return `true` if they do, return `false` if one (or both) don't. */

const checkRange = function (a, b) {
  if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
    console.log("a and b in range 40...60");
  } else if (a >= 70 && a <= 100 && b >= 70 && b <= 100) {
    console.log("a and b in range 70...100");
  } else {
    console.log("a and b not in the range");
  }
};
checkRange(40, 50);

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */

const createCopies = function (str, n) {
  if (n <= 0) {
    return "n should be positive";
  } else {
    let copies = "";
    for (let i = 0; i < n; i++) {
      copies += str + " ";
    }
    return copies;
  }
};
console.log(createCopies("strive", 4));

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */

const startsWith = function (str) {
  if (str.startsWith("Los") || str.startsWith("New")) {
    return str;
  } else {
    return "";
  }
};
console.log(startsWith("Los Angeles"));

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */

const totalSum = function (...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
console.log(totalSum(3, 6, 4));

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
    Return `true` is it does, `false` if it doesn't. */

const checkArray = function (arr) {
  //   if (arr[0] === 1 || arr[0] === 3 || arr[1] === 1 || arr[1] === 3) {
  //     console.log("arr contains 1 or 3");
  //   } else {
  //     console.log(" arr doesn nott  contain 1 or 3");
  //   }
  if (arr.includes(1) || arr.includes(3)) {
    return true;
  } else {
    return false;
  }
};

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */

const notIncludes = function (arr) {
  if (!checkArray(arr)) {
    return true;
  } else {
    return false;
  }
};

/* 11. Create a function to find the longest string from a given array of strings. 
    Pass the array as parameter and return the longest string. */

const getLongestStr = function (arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i].length);
  }
  const largest = [...temp].sort((a, b) => b - a)[0];
  const index = temp.indexOf(largest);

  return arr[index];
};
console.log(getLongestStr(["aa", "ccccc", "ddd"]));

/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

const angleType = function (angle) {
  if (angle < 90) {
    return "acute";
  } else if (angle === 90) {
    return "right";
  } else if (angle < 180) {
    return "obtuse";
  } else {
    return "straight";
  }
};

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

const findIndexofLargestInt = function (arr) {
  const largest = [...arr].sort((a, b) => b - a)[0];
  console.log(largest);
  return arr.indexOf(largest);
};
console.log(findIndexofLargestInt([4, 8, 2]));

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */

/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */

/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor â‡’ return `Diego`
    The number has 5 as a factor â‡’ return `Riccardo`
    The number has 7 as a factor â‡’ return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    âš ï¸ The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */

/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
