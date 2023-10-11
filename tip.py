while True:
    bill = float(input("\nBill Amount: $"))
    percent = int(input("Tip Percentage: %"))

    tip = (percent / 100) * bill
    total = tip + bill

    print("\n----------------------------------")
    print("Bill Amount: $" + "%.2f" % bill)
    print(f"%{percent} of Bill: $" + "%.2f" % tip)
    print("Total: $" + "%.2f" % total)
    print("----------------------------------\n")

    user = input("Continue? y/n: ")

    if user == "n":
        break