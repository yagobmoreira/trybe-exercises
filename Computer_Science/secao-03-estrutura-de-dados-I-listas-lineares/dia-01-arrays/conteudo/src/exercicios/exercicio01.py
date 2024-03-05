def calculate_maximum_uptime(states):
    max_time = 0
    current_time = 0
    for value in states:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time > max_time:
            max_time = current_time

    return max_time


print(calculate_maximum_uptime([1, 1, 1, 1, 0, 0, 1, 1]))
