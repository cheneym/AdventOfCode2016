import re

with open('./2015/day05/input.txt') as f:
    lines = f.readlines()
inputData = lines

#Part 1
numNiceStrings = 0
for line in inputData:
    if not re.search('ab|cd|pq|xy', line) \
        and len(re.findall('[aeiou]', line)) >= 3 \
        and re.search(r'(.)\1', line):
        numNiceStrings += 1

print(numNiceStrings) #258


#Part 2
numNiceStrings = 0
for line in inputData:
    if re.search(r'(..).*\1', line) and re.search(r'(.).\1', line):
        numNiceStrings += 1

print(numNiceStrings) #53
