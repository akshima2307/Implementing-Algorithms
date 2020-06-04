# Uses python3


def fibonacci(n):
    fib = {1:1 , 2:1}
    if n <= 0:
        return n
    for i in range(3 , n+1):
        fib[i] = fib[i-1] +fib[i-2]
    return fib[n]

n = int(input())
print(fibonacci(n))
