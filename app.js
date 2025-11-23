var num1, num2
num1 = 5
num2 = 6
sum = num1 + num2
diff = num1 - num2
prod = num1 * num2
div = num1 / num2
mod = num1 % num2
// answer 1
function add() {
    document.write("addition:")
    document.write(num1, " + ", num2, " = ", sum)  
} 

// answer 2
function opp() {
    document.write("other operations: <br>")
    document.write(num1, " - ", num2, " = ", diff ,"<br>")  
    document.write(num1, " * ", num2, " = ", prod ,"<br>") 
    document.write(num1, " / ", num2, " = ", div ,"<br>") 
    document.write(num1, " % ", num2, " = ", mod ,"<br>") 
} 

// answer 3a
var num;

// asnwer 3b
function showValue() {
    let num;
    document.write("the walue of the variable is: ", num)
}

// answer 3c
num = 8

// answer 3d
function initialValue() {
    let num = 8;
    document.write("the initial value of the variable is : ", num)
}

// asnwer 3e
num++

// asnwer 3f
function increment() { 
    document.write("value of variable after increment = ", num)
}

// answer 3g
num = num + 7

// answer 3h
function add7() {
    document.write("variable + 7 = ", num)
}

// answer 3i
num--

// answer 3j
function decrement() {
    document.write("value of variable after decrement is = ", num)
}

// answer 3k
var remain;
remain = num % 3

// answer 3l
function remainder() {
    document.write("the remainder is = ", remain)
}

// amswer 4
var price = 1200;
function buyTickets() {
    document.write("The cost of 5 tickets will be : ", price*5)
}

// answer 5
function table4() {
for (let i=1; i<11; i++) {
    document.write("4 x ", i, " = ", 4*i, "<br>")
}
}

// answer 6
var celsius, farenheit;
celsius = 14
farenheit = 80
function convertTemperature() {
    document.write("14° celsius = ", (celsius * 9/5) + 32, "<br>")
    document.write("80° farenheit = ", (farenheit - 32) * 5/9)
}

// answer 7
var cost1, cost2, qty1, qty2, shipping, total;
cost1 = 600
qty1 = 5
cost2 = 3000
qty2 = 3
shipping = 200

function cart() {
    document.write("Price of product 1 is : ", "Rs", cost1, "<br>")
    document.write("Quantity of product 1 is : ", qty1, "<br>")
    document.write("Price of product 2 is : ", "Rs", cost2, "<br>")
    document.write("Quantity of product 2 is : ", qty2, "<br>")
    document.write("Shipping charges are : ", shipping, "<br>")
    document.write("<br>")
    document.write("Total cost of order is : ", "Rs", (cost1*qty1)+(cost2*qty2)+shipping)
}

// answer 8
var totalMarks, obtainedMarks, percentage;
totalMarks = 40
obtainedMarks = 37

function percentage() {
    document.write("MARK SHEET <br>")
    document.write("<br>")
    document.write("Total marks : ", totalMarks, "<br>")
    document.write("obtainedMarks : ", obtainedMarks, "<br>")
    document.write("Percentage : ", (obtainedMarks/totalMarks)*100)
}

// answer 9
var dollar, riyal; // dollar = 104.80pkr, riyal = 28pkr
dollar = 10
riyal = 25

function convertCurrency() {
    document.write("CURRENCY IN PKR <br>")
    document.write("Total currency in PKR : ", (dollar*104.8)+(riyal*28))
}

// answer 10
var number;
function operation() {
let number = prompt("enter a number!")
document.write(number+5*10/2)
}

// answer 11
var currentYear, birthYear;
currentYear = 2025
function findAge() {
    let birthYear = prompt("Enter Birth Year!!1")
    document.write("current year : ", currentYear, "<br>")
    document.write("birth year : ", birthYear, "<br>")
    document.write("age : ", currentYear - birthYear)
    
}

// answer 12
var radius, circumference, area;

function geometrizer() {
    let radius = prompt("Input the radius")
    document.write("The circumference is : ", 2*3.142*radius, "<br>")
    document.write("The area is : ", 3.142*radius*radius)


}

// answer 13
var favSnack, currentAge, maximumAge, perDay, totalSnacks;
function calculate() {
    let favSnack = prompt("Enter Fav snack!!!")
    let currentAge = prompt("Enter your current age!!!")
    let maximumAge = prompt("Enter the maximum age!!!")
    let perDay = prompt("How many do you eat per day?")
    totalSnacks = 365*(maximumAge-currentAge)*perDay
    document.write("Favourite Snack : ", favSnack, "<br>")
    document.write("Current Age : ", currentAge, "<br>")
    document.write("Maximum Age : ", maximumAge, "<br>")
    document.write("Amount of snack per day : ", perDay, "<br>")
    document.write("You will need ", totalSnacks, " ", favSnack, " to last you until the age of ", maximumAge)
}