# import random
import random

# Generate CPU number
cpu = random.randint(1, 10)

# Initialize guess counter
count = 1

# While loop for main game, defualt = 5 rounds
while count <= 5:
    # User input for user guess
    user = int(input("Enter a number (1-10): "))

    # If statement for game logic
    if user == cpu:
        print(f"Congrats, you win! The number was {cpu}")
        break
    elif user != cpu:
        print("Try again!")
        count = count + 1

# Losing message for loss event
if count > 5:
    print(f"Sorry, you lose! The number was {cpu}")
