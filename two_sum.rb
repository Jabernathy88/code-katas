# Solution to: https://leetcode.com/problems/two-sum/

def two_sum(nums, target)
  dict = Hash.new
  nums.each_with_index do |num, i|
    if dict[target - num]
      return [dict[target - num], i]
    end
    dict[num] = i
  end
end
