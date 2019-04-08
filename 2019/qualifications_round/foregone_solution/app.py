import math

def has4(x):
  return "4" in str(x)

t = int(input())  # read a line with a single integer

for i in range(1, t + 1):
  x = int(input())  # read a list of integers, 2 in this case

  for a in range(0, math.ceil(x / 2)):
    if has4(a):
      continue

    b = x - a

    if not has4(b):
      print("Case #{}: {} {}".format(i, a, b))
      break
