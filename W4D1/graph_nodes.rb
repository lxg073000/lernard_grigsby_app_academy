class GraphNode
  attr_accessor :val, :neighbors
  
  def initialize(val)
    @val = val
    @neighbors = []
  end

  def add_neighbors(neighbor_node)
    self.neighbors << node
  end

  def bfs(node, target)
    queue = node
    visited = Set.new()

    until queue.empty?
      node = queue.shift
      unless visited.include?(node)
        return node if node.val == target
        visited.add(node)
        queue += node.neighbors
      end
    end
    return nil

end

# a = GraphNode.new('a')
# b = GraphNode.new('b')
# c = GraphNode.new('c')
# d = GraphNode.new('d')
# e = GraphNode.new('e')
# f = GraphNode.new('f')
# a.neighbors = [b, c, e]
# c.neighbors = [b, d]
# e.neighbors = [a]
# f.neighbors = [e]