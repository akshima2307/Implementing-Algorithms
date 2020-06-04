# Uses python3
import sys
import math

import math
def get_change(m):
    coins = [10 , 5 , 1]
    count = 0
    for coin in coins:
        while m >= coin:
            m = m - coin
            count = count + 1
    return count


#print(get_change(28))




if __name__ == '__main__':
    m = int(sys.stdin.read())
    print(get_change(m))
