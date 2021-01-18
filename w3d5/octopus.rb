SCHOOL = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def biggest_fish_1()
  # O(n^2) time. Do this by comparing all fish lengths to all other fish lengths
  count = Hash.new(0)

  SCHOOL.each do |fish|
    SCHOOL.each do |fish2|
      count[fish] += 1 if fish.length > fish2.length
    end
  end

  count.key(count.values.max)

end

def biggest_fish_2(school)
  # Find the longest fish in O(n log n) time.  Binary
  return school if school.length == 1
  return nil if school.length == 0

  mid = school.length / 2
  left = biggest_fish_2(school[0...mid])
  right = biggest_fish_2(school[mid..-1])

  merge(left, right)
end

def merge(left, right)
  sorted_fish = []
  until left.empty? || right.empty?
    case left.first <=> right.first
    when -1 || 0
      sorted_fish << left.shift
    when 1
      sorted_fish << right.shift
    end
  end

  sorted_fish.concat(left)
  sorted_fish.concat(right)
  sorted_fish
end

def biggest_fish_3(school)
  #Find the longest fish in O(n) time.

  biggest = school[0]
  school.each do |fish|
    if fish.length > biggest.length
      #puts "#{fish} was bigger than #{biggest}"
      biggest = fish

    end
  end
  biggest
end