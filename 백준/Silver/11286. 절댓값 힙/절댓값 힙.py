import sys
import heapq

heap = []
n = int(sys.stdin.readline())
for _ in range(n):
  m = int(sys.stdin.readline())
  if m == 0:
    if len(heap) == 0:
      print(0)
    else:
      print(heapq.heappop(heap)[1])
  else:
    if m > 0:
      heapq.heappush(heap, (m,m))
    elif m < 0:
      heapq.heappush(heap, (-m , m))