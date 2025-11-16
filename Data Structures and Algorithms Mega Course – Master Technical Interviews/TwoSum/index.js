const twoSum = (nums, target) => {
  const seen = new Map(); // yeh humari notebook/daftar hai

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // target banane ke liye doosra number

    // check karo complement pehle notebook me likha hua hai ya nahi
    if (seen.has(complement)) {
      return [seen.get(complement), i]; // pehla index + current index
    }

    // agar nahi tha, current number ko notebook me likh lo
    seen.set(nums[i], i);
  }

  return null;
};

twoSum()