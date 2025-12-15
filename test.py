days = [[29,30,31,"","","",""],
        [22,23,24,25,26,27,28],
        [15,16,17,18,19,20,21],
        [8,9,10,11,12,13,14],
        [1,2,3,4,5,6,7]]
weekdays =["Monaday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

for day in weekdays:
    print(f"{day:^10}",end="")
print()

for row in days :
    for d in row:
        print(f"{str(d):^10}",end="")
    print()