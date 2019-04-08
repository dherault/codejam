import math

t = int(input())

for i in range(1, t + 1):
  n = int(input())
  actions_string = input()

  impossible_action_grid = []

  for k in range(0, n - 1):
    row = [None] * (n - 1)
    row.append(['E'])

    impossible_action_grid.append(row)

  impossible_action_grid.append([['S']] * n)

  x = 0
  y = 0

  for direction in actions_string:
    if impossible_action_grid[y][x] == None:
      impossible_action_grid[y][x] = [direction]
    else:
      impossible_action_grid[y][x].append(direction)

    if direction == 'S': y += 1
    else: x += 1

  visited = set()
  queue = [((0, 0), '')]

  while queue:
    position, path = queue.pop()

    if position == (n - 1, n - 1):
      print("Case #{}: {}".format(i, path))
      break

    # print(n, position)
    impossible_actions = set(impossible_action_grid[position[1]][position[0]] or [])
    possible_actions = set(['E', 'S'])

    if impossible_actions != None:
      possible_actions = possible_actions.difference(impossible_actions)

    # print(impossible_actions, possible_actions)
    for action in possible_actions:
      nextX = position[0]
      nextY = position[1]

      if action == 'S': nextY += 1
      else: nextX += 1

      # print(nextX, nextY, action)

      queue.append(((nextX, nextY), path + action))



