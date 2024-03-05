def students_in_instant(arrivals, departures, time_instant):
    result = 0
    for i in range(len(arrivals)):
        if arrivals[i] <= time_instant <= departures[i]:
            result += 1
    return result
