import csv
with open("smarterway1.csv") as f:
    smarter_data = csv.reader(f)
    smarter_list = []
    for row_i in smarter_data:
        smarter_list += row_i
    pep_index = smarter_list.index("Pepperoni")
print(smarter_list[pep_index])
