import os

with open('input.txt') as f:
    lines = f.readlines()
inputData = lines[0]
inputData = inputData.split(', ')
print inputData
