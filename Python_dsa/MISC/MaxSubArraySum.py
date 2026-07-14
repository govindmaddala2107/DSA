import sys

max_val = sys.float_info.min
arr = [-2, -3, 4, -1, -2, 1, 5, -3]
sum = 0
n = len(arr)
subArr = []
for i in range(0, n):
    ele = arr[i]
    if sum < 0:
        sum = 0
        subArr = []
    sum += ele
    if sum > max_val:
        max_val = sum
print(max_val)
