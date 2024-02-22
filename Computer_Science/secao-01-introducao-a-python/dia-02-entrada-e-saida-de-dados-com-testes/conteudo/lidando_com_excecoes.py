recuperacao = []

with open("notas.txt", mode="r") as file:
    for note in file:
        student_grade = note
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuperacao.append(student_grade[0] + "\n")

with open("recuStudents.txt", mode="w") as recu_students_file:

    print(recuperacao)

    recu_students_file.writelines(recuperacao)
