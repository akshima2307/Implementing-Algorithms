# python3
"""
import random
def max_pairwise_product(n,a):
    global result
    max_product = 0
    for i in range(0 , n):
        for j in range(i + 1, n):
            if a[i] * a[j] > result:
                result = a[i]*a[j]
    return result
"""
#python3


def max_pairwise_product_faster(n , a):
    global fast
    max_index1 = -1
    for i in range(n):
        if max_index1 == -1 or a[i] > a[max_index1]:
            max_index1 = i
    max_index2 = -1
    for j in range(n):
        if j != max_index1 and (max_index2 == -1 or a[j] > a[max_index2]):
            max_index2 = j
    fast = a[max_index1] * a[max_index2]
    return fast



if __name__ == '__main__':
    input_n = int(input())
    input_numbers = [int(x) for x in input().split()]
    print(max_pairwise_product_faster(input_n , input_numbers))

"""   
result = 0
fast =0


while True:
    if __name__ == '__main__':
        n = (random.randint(2,3))
        result=0;fast=0
        a = list(random.randint(0 , 50) for r in range(n))
        assert (len(a) == n)
        result = max_pairwise_product(n , a)
        fast = max_pairwise_product_faster(n , a)
        if(fast == result):
            print("Correct Answer : ", n ,"\n<" , a ,"\n<", fast , result)
       
        else:
            print("wrong Answer:" ,  n ,"\n<" , a ,"\n<", fast , result)
            
        
"""   


