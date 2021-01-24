require 'byebug'
require 'singleton'
class Blank
  include Singleton
  def inspect
    "#{" __ "}"
  end
end
  
  
  
class Cache
  attr_reader :lru
  

  def initialize(cache_size)
    @null = Blank.instance

    @lru = Array.new(cache_size) {@null}
    @max = cache_size
  end

  def count
  # returns number of elements currently in cache
    @lru.reject{|el| el == Blank.instance}.count
  end

  def count_null
    # returns number of elements currently in cache
    @lru.reject{|el| el != Blank.instance}.count
  end

  def add(el)
      #adds element to cache according to LRU principle
      if @lru.include?(el)
        @lru.delete(el)
        @lru.unshift(Blank.instance)
      end
      
      @lru.shift
      @lru.push(el)
  end

  def show
    # shows the items in the cache, with the LRU item first
    p @lru
  end
end

johnny_cache = Cache.new(4)

  johnny_cache.add("I walk the line")
  johnny_cache.add(5)
  puts @lru

  johnny_cache.count # => returns 2

  johnny_cache.add([1,2,3])
  johnny_cache.add(5)
  johnny_cache.add(-5)
  johnny_cache.add({a: 1, b: 2, c: 3})
  johnny_cache.add([1,2,3,4])
  johnny_cache.add("I walk the line")
  johnny_cache.add(:ring_of_fire)
  johnny_cache.add("I walk the line")
  johnny_cache.add({a: 1, b: 2, c: 3})
  #debugger


  johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]
