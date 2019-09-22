# Solution to: https://leetcode.com/problems/reverse-integer/

def reverse(x)
  rev_int = x.to_s.reverse.to_i
  if rev_int > 2**31 - 1
    return 0
  elsif x.negative?
    return -rev_int
  else
    rev_int
  end
end
