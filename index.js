function hasTargetSum(nums, target) {
  // Create a hashmap to store elements and their complements
  const hashmap = new Map();
  
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const complement = target - num;
      
      // Check if complement exists in the hashmap
      if (hashmap.has(complement)) {
          // If complement exists, a pair that adds up to the target is found
          return true;
      }
      
      // Add the current element to the hashmap
      hashmap.set(num, true);
  }
  
  // If no pair is found
  return false;
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(hasTargetSum(nums, target)); // Output: true


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  loop through array or reduce

  if two numbers in the array = the target return true
*/

/*
  Add written explanation of your solution here
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
