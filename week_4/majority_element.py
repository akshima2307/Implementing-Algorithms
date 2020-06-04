# Uses python3
import sys

def get_majority_element(a, left, right):
    if left == right:
        return -1
    if left + 1 == right:
        return a[left]
    #write your code here
    left_element = get_majority_element(a , left , (left + right) // 2)
    right_element = get_majority_element(a , (left + right) // 2 , right)

    Lcount = 0
    for i in range(left , right):
        if a[i] == left_element:
            Lcount += 1
    if Lcount > (right - left) // 2:
        return left_element
    Rcount = 0
    for i in range(left, right):
        if a[i] == right_element:
            Rcount += 1
    if Rcount > (right - left) // 2:
        return right_element


    return -1


if __name__ == '__main__':
    input = sys.stdin.read()
    n, *a = list(map(int, input.split()))
    if get_majority_element(a, 0, n) != -1:
        print(1)
    else:
        print(0)
