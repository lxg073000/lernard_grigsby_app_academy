  class Stack
    attr_reader :stack
    # Implement and test Stack class

    def initialize
      # create ivar to store stack here!
      # LIFO model, using Array
      @stack = []
    end

    def push(el)
      # adds an element to the stack
      stack << el
    end

    def pop
      # removes one element from the stack
      stack.shift 
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      stack[0]
    end
  end

class Queue
  attr_reader :queue
  # Test the principle of FIFO for Queue class

  def initialize
    @queue = []
  end

  def enqueue(el)
    queue << el
  end

  def dequeue
    queue.shift
  end

  def peek
    queue.first
  end
end

class Map
  
  attr_reader :map
  # Implement and test Map class
  # Unique pair ADT implemented through a 2D Array.  each ele is a [k,v]

  #Our Map class should have the following instance methods: set(key, value), get(key), delete(key), show
  def initialize
    @map = Array.new
  end

  def set(key, value)

    #iterate through entire map.  Update value if key exists, otherwise create new k-v-pair
    map.each do |pair|
      if pair[0] == (key)
        pair[1] = value
        return true
      end
    end

    map << [key,value]
    true
  end

  def get(key)
    #return value at given key
    map.each {|pair| return pair if pair[0] == key}
    return false
  end

  def delete(key, value)
    
  end

  def show

  end
  
end

