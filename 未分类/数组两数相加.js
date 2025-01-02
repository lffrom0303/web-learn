const twoSum =  (nums = [2, 7, 11, 15], target = 9)=> {
  const diffs = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (diffs[target - nums[i]] !== undefined) {
      console.log(diffs[target - nums[i]], i)
      return [diffs[target - nums[i]], i];
    }
    diffs[nums[i]] = i;
  }

};
twoSum()