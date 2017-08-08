## Part 1

with open('input.txt') as f:
    lines = f.readlines()
inputData = lines[0]

floor = 0
for paren in inputData:
    if paren == '(':
        floor += 1
    else:
        floor -= 1

print floor # 280


## Part 2
floor = 0
for index, paren in enumerate(inputData):
    if paren == '(':
        floor += 1
    else:
        floor -= 1
    if floor == -1:
        print index + 1
        break

# 1797
