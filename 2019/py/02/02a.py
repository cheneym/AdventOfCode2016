import os

fo = open(os.path.join(os.path.dirname(__file__), 'input.txt'), 'r')
lines = fo.readlines()
nums = [int(x) for x in lines[0].split(',')]

nums[1] = 12
nums[2] = 2
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

print(nums[0])
