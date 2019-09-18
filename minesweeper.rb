class Minesweeper
  attr_reader :width, :height, :mines_count

  def initialize(width:, height:, mines_count:)
    @width, @height = width, height

    # some validations
    @mines_count = mines_count
    max_mines = (width * height - 1) # makes sure all spaces aren't mines, which seems pointless?
    @mines_count = 0 if mines_count < 0
    @mines_count = max_mines if mines_count > max_mines
    @board = generate_board

    @mines_count.times do
      randomize_mines
    end
  end

  def generate_board
    board = Array.new(@width)
    board.map do
      Array.new(@height)
    end
  end

  def randomize_mines
    x = rand(@width)
    y = rand(@height)

    if @board[x][y] == nil
      @board[x][y] = 'm'
    else
      randomize_mines # used Recursion here. not sure if this is memory-efficient?
    end
  end

  def click(x, y)
    count = 0

    if @board[x][y] == 'm'
      return 'YOU LOSE. :-('
    end

    for i in -1..1 do
      for j in -1..1 do
        next_x = x+i
        next_y = y+j

        # catch invalid coordinates
        if next_x == -1 || next_y == -1
          next
        end
        if next_x >= @width || next_y >= @height
          next
        end

        next_cell = @board[next_x][next_y]
        if next_cell && next_cell == 'm'
          count += 1
        end
      end
    end
    "There are #{count} mines adjacent to this cell."
  end

end
