city_count = int(input())
roads_length = list(map(int, input().split()))
oil_cost = list(map(int, input().split()))

result = 0
cost = oil_cost[0]

for i in range(city_count - 1):
    if cost > oil_cost[i]:
        cost = oil_cost[i]
    result += cost * roads_length[i]

print(result)