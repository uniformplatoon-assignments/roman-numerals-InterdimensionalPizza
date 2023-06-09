def to_roman(num):
    roman_list = [
        [1000, "M"], 
        [900, "CM"], 
        [500, "D"], 
        [400, "CD"], 
        [100, "C"], 
        [90, "XC"], 
        [50, "L"], 
        [40, "XL"], 
        [10, "X"], 
        [9, "IX"], 
        [5, "V"], 
        [4, "IV"], 
        [1, "I"]
        ]
    answer = ''
    for list in roman_list:
        while num >= list[0]:
            num = num - list[0]
            answer = answer + list[1]
    print(answer)

to_roman(944)