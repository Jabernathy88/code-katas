// Solution to: https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
  const output = {}
  for (let i = 0; i < nums.length; i++) {
      if (output[nums[i]] >= 0) {
          return [output[nums[i]] , i]
      }
      output[target-nums[i]] = i
  }
};
