with open('./2015/day03/input.txt') as f:
    lines = f.readlines()
inputData = lines[0]

dx = {
    '^': 0,
    '<': -1,
    'v': 0,
    '>': 1
}
dy = {
    '^': 1,
    '<': 0,
    'v': -1,
    '>': 0
}

#Part 1
xCoord = 0
yCoord = 0
visitedPositions = {'0,0'}
numVisitedHouses = 1
for direction in inputData:
    xCoord += dx.get(direction)
    yCoord += dy.get(direction)
    currentPosition = str(xCoord) + ',' + str(yCoord)
    if currentPosition not in visitedPositions:
        visitedPositions.add(currentPosition)
        numVisitedHouses += 1

print(numVisitedHouses) # 2565


#Part 2

visitedPositions = {'0,0'}
numVisitedHouses = 1
for startIndex in range(2):
    x = 0
    y = 0
    for direction in inputData[startIndex::2]:
        x += dx.get(direction)
        y += dy.get(direction)
        currentPosition = str(x) + ',' + str(y)
        if currentPosition not in visitedPositions:
            visitedPositions.add(currentPosition)
            numVisitedHouses += 1

print(numVisitedHouses) # 2639
