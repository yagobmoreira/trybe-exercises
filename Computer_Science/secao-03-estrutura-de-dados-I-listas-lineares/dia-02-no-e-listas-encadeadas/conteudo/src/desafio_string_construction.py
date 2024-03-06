with open("string-construction-testcases/input/input00.txt", "r") as file:
    data = file.read()


def stringConstruction(s):
    print(set(s.split()))
    # words_num = int(s[0])
    # result = ""

    # for i in range(1, words_num + 1):
    #     count = 0
    #     word = s[i]
    #     p = ""
    #     while count < len(word):
    #         p += word[count]
    #         count += 1
    #         if p[-1] == word[-1]:
    #             if not p == word:
    #                 p += p[: len(word)]
    #                 break

    #     result += f"{count}\n"

    # return result


print(stringConstruction(data))
