  class Stack
    # Implement and test Stack class

    def initialize
      # create ivar to store stack here!
      # LIFO model, using Array
      @stack = []
    end

    def push(el)
      # adds an element to the stack
      @stack << el
    end

    def pop
      # removes one element from the stack
      @stack.shift 
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
      @stack[0]
    end
  end

class Queue
  # Test the principle of FIFO for Queue class

  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue << el
  end

  def dequeue
    @queue.shift
  end

  def peek
    @queue.first
  end
end

