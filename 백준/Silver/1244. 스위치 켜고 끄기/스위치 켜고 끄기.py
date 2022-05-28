num_of_switch = int(input())
switches = [0] + list(map(int, input().split()))

num_of_student = int(input())


def change(num):
    if switches[num] == 0:
        switches[num] = 1
    else:
        switches[num] = 0
    return


for i in range(num_of_student):
    sex, receive_number = map(int, input().split())

    # 남학생이면
    if sex == 1:
        for j in range(receive_number, num_of_switch + 1, receive_number):
            change(j)

    # 여학생이면
    else:
        change(receive_number)

        for j in range(num_of_switch // 2):
            if receive_number + j > num_of_switch or receive_number - j < 1: break
            if switches[receive_number - j] == switches[receive_number + j]:
                change(receive_number - j)
                change(receive_number + j)
            else:
                break
             
for i in range(len(switches)):
    if i == 0: continue
    print(switches[i], end=" ")
    if i % 20 == 0:
        print()