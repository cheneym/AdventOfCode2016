with open('./2015/day02/input.txt') as f:
    lines = f.readlines()
inputData = lines

#Part 1
totalSurfaceArea = 0
for expression in inputData:
    dimensions = expression.split('x')
    l = int(dimensions[0])
    w = int(dimensions[1])
    h = int(dimensions[2])
    area = 2*l*w + 2*w*h + 2*h*l + min(l*w, l*h, h*w)
    totalSurfaceArea += area

print totalSurfaceArea #1606483


#Part 2
totalVolume = 0
totalPerimeter = 0
for expression in inputData:
    dimensions = expression.split('x')
    l = int(dimensions[0])
    w = int(dimensions[1])
    h = int(dimensions[2])
    volume = l*w*h
    totalVolume += volume
    totalPerimeter += min(2 * (l+w), 2 * (l+h), 2 * (h+w))
print totalVolume + totalPerimeter
