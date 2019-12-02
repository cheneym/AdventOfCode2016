import os

fo = open(os.path.join(os.path.dirname(__file__), 'input.txt'), 'r')

total = 0
for line in fo.readlines():
    currFuel = int(line)
    fuelTotal = 0
    while currFuel > 8:
        currFuel = int(currFuel // 3) - 2
        fuelTotal += currFuel
    total += fuelTotal

print(total)
