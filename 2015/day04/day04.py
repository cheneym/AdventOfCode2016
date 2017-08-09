import hashlib
import re

with open('./2015/day04/input.txt') as f:
    lines = f.readlines()
inputData = lines[0]

#Day 1

counter = 1
while True:
    m = hashlib.md5()
    m.update(inputData + str(counter))
    if re.match('0{5,}.*', m.hexdigest()):
        break
    counter += 1
print(counter) #282749


#Day2
counter = 1
while True:
    m = hashlib.md5()
    m.update(inputData + str(counter))
    if re.match('0{6}[^0]*', m.hexdigest()):
        break
    counter += 1
print(counter) #9962624
