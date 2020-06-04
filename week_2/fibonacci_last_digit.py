# Uses python3
import sys

def get_fibonacci_last_digit_fast(n):
    fib = {1:1 , 2:1}
    if n <= 0:
        return n
    for i in range(3 , n+1):
        fib[i] = (fib[i-1] +fib[i-2])%10
    return fib[n]

if __name__ == '__main__':

    n = int(input())
    print(get_fibonacci_last_digit_fast(n))
