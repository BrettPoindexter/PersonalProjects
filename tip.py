#Loops until break statement
while True:
    #User input for bill amount
    bill = float(input("\nBill Amount: $"))
    #User input for tip percentage
    percent = int(input("Tip Percentage: %"))

    #Convert percent to decimal, find percentage of bill
    tip = (percent / 100) * bill
    #Add tip and bill for final amount
    total = tip + bill

    #Print all information with formatting for readability and proper decimal places
    print("\n----------------------------------")
    print("Bill Amount: $" + "%.2f" % bill)
    print(f"%{percent} of Bill: $" + "%.2f" % tip)
    print("Total: $" + "%.2f" % total)
    print("----------------------------------\n")

    #User choice for loop
    user = input("Continue? y/n: ")

    #Add loop break
    if user == "n":
        break