# Uses python3
import sys

def pisanoPeriod(m):
    prev , curr = 0 , 1
    for i in range (0 , m*m):
        prev , curr = curr , (prev + curr)%m
        if (prev == 0 and curr == 1):
            return i+1

def fibonacci_Mod(n , m):
    pisano_period = pisanoPeriod(m)
    n = n % pisano_period
    prev , curr = 0 , 1
    if n == 0:
        return 0
    elif n == 1:
        return 1
    for i in range(n-1):
        prev , curr = curr , prev + curr
    return curr % m

#print(fibonacci_Mod(2816213588 , 239))


if __name__ == '__main__':
    input = sys.stdin.read();
    n, m = map(int, input.split())
    print(fibonacci_Mod(n, m))
