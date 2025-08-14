print("Single line print")

print(''' multi
      line print''')

# to check type of input
a = "10"
b= type(a)
print(b)

# type conversion
c = float(a)
b = type(c)
print(b)

# to take input in python

a = input("Enter numbe : ") # it will take input as string
print(type(a)) # string

b = int(input("Enter number 2 : ")) # do type conversion 
print(type(b)) # int


combination = [ "Apple", "Orange" , 5, 345.06, False, "Aakash", "Rohan" ]
combination[0] = "Grapes"  #unlike string list can be immutable

print(combination[0])




 


