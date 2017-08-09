import re

with open('./2015/day05/input.txt') as f:
    lines = f.readlines()
inputData = lines

#Part 1
numNiceStrings = 0
for line in inputData:
    if re.search('ab|cd|pq|xy', line):
        continue
    numVowels = 0
    for char in line:
        if re.search('[aeiou]', char):
            numVowels += 1
            if numVowels == 3:
                break
    if re.search(r'(.)\1', line) and (numVowels >= 3):
        numNiceStrings += 1

print(numNiceStrings) #258


#Part 2
numNiceStrings = 0
for line in inputData:
    if re.search(r'(..).*\1', line) and re.search(r'(.).\1', line):
        numNiceStrings += 1

print(numNiceStrings) #53
