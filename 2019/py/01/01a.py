import os

fo = open(os.path.join(os.path.dirname(__file__), 'input.txt'), 'r')

total = 0
for line in fo.readlines():
    total += int(int(line) // 3) - 2

print(total)
