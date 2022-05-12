N = int(input())

def gcd(num1, num2):
    if num1 % num2 == 0:
        return num2
    else:
        return gcd(num2, num1 % num2)

def lcm(num1, num2):
    gcd_number = gcd(num1, num2)
    return int(num1* num2 / gcd_number)

for i in range(N):
    num1, num2 = map(int, input().split())
    print(lcm(num1, num2))