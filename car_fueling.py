import sys


def compute_min_refills(distance, tank, stops):
    currentFuel = tank
    numrefill = 0
    stops.append(distance)
    stops.insert(0,0)
    for i in range(len(stops)-1):
         if (stops[i+1] - stops[i]) > tank:
            return -1
         elif (stops[i+1] - stops[i]) > currentFuel:
            numrefill += 1
            currentFuel = tank
            currentFuel-= (stops[i+1] - stops[i])
         else:

            currentFuel -= (stops[i+1] - stops[i])
    return numrefill



if __name__ == '__main__':
    d, m, _, *stops = map(int, sys.stdin.read().split())
    print(compute_min_refills(d, m, stops))
