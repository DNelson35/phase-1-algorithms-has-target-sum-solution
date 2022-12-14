// function hasTargetSum(array, target) {
//   for(let i = 0; i < array.length; i++){
//     const complement = target - array[i]
//     for(let j = i + 1; j < array.length; j++){
//       if(array[j] === complement) return true
//     }
//   }
//   return false
// }

// optimized solution

function hasTargetSum(array, target){
  seenNumbers = {}
  for(number of array){
    const complement = target - number
    if(complement in seenNumbers) return true
    seenNumbers[number] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here 
  runtime: O(n^2)
  space: O(n)

  optimized Big O
  runtime: O(n)
*/

/* 
  Add your pseudocode here
  make a function `hasTargetSum` that checks if two numbers from the array add up to some target. for example, if I have an array[1,2,3,4,] and the target is 6 i should return true becuase 2 and 4 add to 6 for each number check if there's a number that adds to the target.


  function hasTargetSum(){
    iterate through each number in the array
    for the current num, idintify complement that adds to the target (complement = target - num)
    iterate through the rest of the array 
    check if any number is complement

    if i reach the end of the array, return false
  }
*/

/*
  Add written explanation of your solution here
  this function iterates through an array passed through it. then it for each num in the array it takes that number and subtracts it from the target and sets it to the varible complement
  then another loop iterates throught he arrray and checks if any number in the array is equal to the complement number. if not then i will iterate again and the for loop will run again. if it finds the the complement it returns ture if not and it makes it to the end of the array it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
