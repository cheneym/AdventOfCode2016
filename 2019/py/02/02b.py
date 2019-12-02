import os

fo = open(os.path.join(os.path.dirname(__file__), 'input.txt'), 'r')
lines = fo.readlines()
source = [int(x) for x in lines[0].split(',')]

def testNum(noun, verb):
    nums = list(source)

    nums[1] = noun
    nums[2] = verb
    i = 0
    while i < len(nums) - 4:
        num = nums[i]
        if num == 1:
            value1 = nums[nums[i + 1]]
            value2 = nums[nums[i + 2]]
            targetIndex = nums[i + 3]
            nums[targetIndex] = value1 + value2
            i += 4
        elif num == 2:
            value1 = nums[nums[i + 1]]
            value2 = nums[nums[i + 2]]
            targetIndex = nums[i + 3]
            nums[targetIndex] = value1 * value2
            i += 4
        else:
            break

    return nums[0]


for j in range(len(source)):
    for k in range(len(source)):
        result = testNum(j, k)
        if result == 19690720:
            print(j, k)
            print(j * 100 + k)
