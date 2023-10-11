bill = float(input("Bill Amount: $"))
percent = int(input("Tip Percentage: %"))

tip = (percent / 100) * bill
total = tip + bill

print("\nBill Amount: $" + "%.2f" % bill)
print(f"%{percent} of Bill: $" + "%.2f" % tip)
print("Total: $" + "%.2f" % total)