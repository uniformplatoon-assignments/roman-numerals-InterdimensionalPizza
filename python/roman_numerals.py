def to_roman(num):
    my_roman_numbers={
        "M":1000,
        "CM":900,
        "D":500,
        "CD":400,
        "C":100,
        "XC":90,
        "L":50,
        "XL":40,
        "X":10,
        "IX":9,
        "V":5,
        "IV":4,
        "I":1
    }
    my_num=num
    my_answer=[]
    for i in my_roman_numbers:
        while my_roman_numbers[i]<= my_num:
            my_num-= my_roman_numbers[i]
            my_answer.append(i)
    # print(my_answer)
    return ''.join(my_answer)  