import csv
with open("potions.csv") as f:
    data_a = csv.reader(f)
    list_a = []
    for value_i in data_a:
        list_a += value_i
print(list_a)
