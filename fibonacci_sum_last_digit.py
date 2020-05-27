# Uses python3
import sys

def fibonacci_last_digit_sum(n):
    sum = 0
    prev , curr = 0 , 1
    if n == 0:
        return 0
    elif n == 1:
        return 1
    for i in range(n):
        prev , curr = curr , (prev + curr)%10
        sum = (sum + curr) % 10
    return sum + 1

print(fibonacci_last_digit_sum(239))
#print(fibonacci_last_digit_sum( 613455))


if __name__ == '__main__':
    input = sys.stdin.read()
    n = int(input)
    print(fibonacci_last_digit_sum(n))
