n, m = map(int, input().split())

cut_count = int(input())

# 세로 컷
n_cut = [0, n]
# 가로 컷
m_cut = [0, m]

for i in range(cut_count):
    mode, num = map(int, input().split())
    # 가로
    if mode == 0:
        m_cut.append(num)
    # 세로
    elif mode == 1:
        n_cut.append(num)

n_cut.sort()
m_cut.sort()

max_n = 0
max_m = 0

for i in range(len(n_cut) - 1, 0, -1):
    if max_n < n_cut[i] - n_cut[i - 1]:
        max_n = n_cut[i] - n_cut[i - 1]

for i in range(len(m_cut) - 1, 0, -1):
    if max_m < m_cut[i] - m_cut[i - 1]:
        max_m = m_cut[i] - m_cut[i - 1]

print(max_n * max_m)