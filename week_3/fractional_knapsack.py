# Uses python3
import sys

def fractionalKnapsack(n ,capacity, weights, values ):
    perUnitValues = []
    n = len(weights)
    for i in range(n):
        perUnitValues.append(values[i]/weights[i])
    #print(perUnitValues)

    usedItems = [0]*n
    usedCapacity = 0
    totalValue = 0
    for value, i in sorted([(values[i]/weights[i], i) for i in range(n)], reverse=True):
        if usedCapacity + weights[i] <= capacity:
            usedCapacity += weights[i]
            usedItems[i] = 1
            totalValue += values[i]
        else:
            usedItems[i] = float(capacity-usedCapacity)/weights[i]
            totalValue +=  usedItems[i]*values[i]
            break

    return totalValue

#print(fractionalKnapsack([20 , 50 , 30] , [60 , 100 , 120] , 50))


if __name__ == "__main__":
    data = list(map(int, sys.stdin.read().split()))
    n, capacity = data[0:2]
    values = data[2:(2 * n + 2):2]
    weights = data[3:(2 * n + 2):2]
    opt_value = fractionalKnapsack(n , capacity , weights, values)
    print("{:.10f}".format(opt_value))
