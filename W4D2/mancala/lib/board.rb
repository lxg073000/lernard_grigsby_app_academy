class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @player1 = name1
    @player2 = name2
    @cups = Array.new(14) {[]}
    place_stones

  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    cups.each_with_index do |cup, i|
      if i == 6 || i == 13
        next
      else
        4.times do
          cup << :stone
        end
      end
    end 
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos > 12 || start_pos < 0
    raise "Starting cup is empty" if cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []
    new_pos = start_pos

    until stones.empty?
      new_pos += 1
      new_pos = 0 if new_pos > 13
      if new_pos == 6
        @cups[new_pos] << stones.pop if current_player_name == @player1
      elsif new_pos == 13
        @cups[new_pos] << stones.pop if current_player_name == @player2
      else
        @cups[new_pos] << stones.pop
      end
    end
    render
    next_turn(new_pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
  end

  def winner
  end
end
