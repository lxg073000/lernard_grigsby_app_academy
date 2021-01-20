class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize()
    @sequence_length = 1
    @game_over = false
    @seq = []

  end

  def play
    until self.game_over == true
      take_turn
    end
    game_over_message
    reset_game

  end

  def take_turn
    show_sequence
    if require_sequence
      self.round_success_message
      @sequence_length += 1
    else
      self.game_over = true
      return false
    end
    
  end

  def show_sequence
    add_random_color
    puts "Simon says... #{@seq}.. ."

    #sleep before clearing screen
    #player_seq = gets.chomp.split

  end

  def require_sequence
    i = 0
    while i < @sequence_length
      puts 'enter a color...'
      guess = gets.chomp
      if guess == @seq[i]
        i += 1
      else
        self.game_over = true
        return false
      end
    end
    return true

  end

  def add_random_color
    @seq << COLORS.sample
    

  end

  def round_success_message
    puts "we did it, we did it joe..."

  end

  def game_over_message
    puts "...cya joe, koppala 2024!!!"

  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []

  end
end
