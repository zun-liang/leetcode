from typing import List

class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        triplets = []
        for i in range(len(nums)):
            triplets.append((nums[i], nums[i] + diff, nums[i] + diff * 2))
        results = []
        for t in triplets:
            if t[1] in nums and t[2] in nums:
                results.append(t)
        return len(results)
