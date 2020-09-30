with open("terrasque_append.txt", "w") as f:
    f.write("I am a 20th")
with open("terrasque_append.txt", "a") as f:
    f.write(" level monster!")
with open("terrasque_append.txt") as f:
    print(f.read())
