# Solution to: https://leetcode.com/problems/pascals-triangle-ii/

def get_item(row_array, i)
  if i < 0 || i >= row_array.length
    return 0
  else
    row_array[i]
  end
end

def get_row(row_index)
  prev_row = [1]
  
  for i in 0..row_indexe
    puts 'I am i:'
    puts i
    new_row = []
    for j in 0..i
      new_num = get_item(prev_row, j-1) + get_item(prev_row, j)
      new_row[j] = new_num
    end 
    prev_row = new_row
  end
  prev_row
end
