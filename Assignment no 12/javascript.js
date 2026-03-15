console.log("===== Arithmetic Operators Tasks =====");


// 1. E-commerce Cart Total Price
let item1 = 200;
let item2 = 350;
let item3 = 150;

let cartTotal = item1 + item2 + item3;
console.log("Cart Total Price:", cartTotal);


// 2. Discount Price (10%)
let price = 1000;
let discount = price * 0.10;
let discountedPrice = price - discount;

console.log("Price after 10% discount:", discountedPrice);


// 3. Total Bill with 18% Tax
let bill = 500;
let tax = bill * 0.18;
let totalBill = bill + tax;

console.log("Total bill including tax:", totalBill);


// 4. BMI Calculator
let weight = 70;
let height = 1.75;

let bmi = weight / (height * height);
console.log("BMI:", bmi);


// 5. Monthly Salary After Tax
let salary = 50000;
let salaryTax = salary * 0.10;
let finalSalary = salary - salaryTax;

console.log("Salary after tax:", finalSalary);


// 6. Average Rating
let r1 = 4;
let r2 = 5;
let r3 = 3;
let r4 = 4;
let r5 = 5;

let avgRating = (r1 + r2 + r3 + r4 + r5) / 5;
console.log("Average Rating:", avgRating);


// 7. Delivery Charge Calculator
let orderAmount = 80;
let deliveryCharge;

if(orderAmount > 100){
    deliveryCharge = 0;
}else{
    deliveryCharge = 10;
}

console.log("Delivery Charge:", deliveryCharge);


// 8. Simple Interest Calculator
let principal = 10000;
let rate = 5;
let time = 2;

let simpleInterest = (principal * rate * time) / 100;

console.log("Simple Interest:", simpleInterest);


// 9. Remaining Balance
let balance = 20000;
let withdraw = 5000;

let remainingBalance = balance - withdraw;

console.log("Remaining Balance:", remainingBalance);


// 10. Time Converter
let minutes = 130;

let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

console.log("Time:", hours, "hours", remainingMinutes, "minutes");



console.log("===== If-Else Tasks =====");


// 1. Login System
let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login Successful");
}else{
    console.log("Invalid Username or Password");
}


// 2. Age Restriction
let age = 17;

if(age >= 18){
    console.log("Access Granted");
}else{
    console.log("Access Denied (Under 18)");
}


// 3. Discount System
let order = 220;

if(order > 200){
    console.log("20% Discount Applied");
}
else if(order > 100){
    console.log("10% Discount Applied");
}
else{
    console.log("No Discount");
}


// 4. Student Grade System
let marks = 75;

if(marks >= 80){
    console.log("Grade A");
}
else if(marks >= 60){
    console.log("Grade B");
}
else if(marks >= 50){
    console.log("Grade C");
}
else{
    console.log("Fail");
}