import csv
with open("potions.csv") as f:
    potions_data = csv.reader(f)
    potions_list = []
    for row_i in potions_data:
        potions_list += row_i
potion_index = potions_list.index("Draught of Peace")
print(potions_list[potion_index + 1])
