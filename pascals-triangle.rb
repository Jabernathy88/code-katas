# Solution to: https://leetcode.com/problems/pascals-triangle/

def add_parents(prev_row, i)
  if i <= 0 
    return 0
  end
  left = prev_row[i-1] || 0
  right = prev_row[i] || 0
  left + right
end

def generate(num_rows)
  triangle = []
  prev_row = [1]
  for i in 1..num_rows
    new_row = []

    for j in 0..i
      new_item = add_parents(prev_row, j)
      if new_item > 0
        new_row << new_item
      else
        new_row << 1
      end
    end
    triangle << prev_row
    prev_row = new_row
  end
  triangle
end
