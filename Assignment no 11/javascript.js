// ==============================
// 1. Arithmetic Operators
// ==============================

console.log("---- Arithmetic Operators ----");

let price1 = 500;
let price2 = 300;

let total = price1 + price2;
console.log("Total Price:", total);

let discount = 200;
let finalPrice = total - discount;
console.log("Final Price after discount:", finalPrice);

let multiply = price1 * 2;
console.log("Multiply example:", multiply);

let divide = price1 / 2;
console.log("Divide example:", divide);

let remainder = 10 % 3;
console.log("Remainder:", remainder);


// ==============================
// 2. Assignment Operators
// ==============================

console.log("\n---- Assignment Operators ----");

let balance = 2000;

balance += 500;   // add money
console.log("Balance after adding 500:", balance);

balance -= 300;   // subtract money
console.log("Balance after spending 300:", balance);


// ==============================
// 3. Comparison Operators
// ==============================

console.log("\n---- Comparison Operators ----");

let age = 18;

console.log("Age >= 18:", age >= 18);
console.log("Age < 18:", age < 18);

console.log("10 == '10':", 10 == "10");     // true
console.log("10 === '10':", 10 === "10");   // false

console.log("5 != 3:", 5 != 3);
console.log("5 !== '5':", 5 !== "5");


// ==============================
// 4. Logical Operators
// ==============================

console.log("\n---- Logical Operators ----");

let username = "admin";
let password = "1234";

let loginCheck = username === "admin" && password === "1234";
console.log("Login Successful:", loginCheck);

let isWeekend = true;
let isHoliday = false;

console.log("Weekend OR Holiday:", isWeekend || isHoliday);

let isLoggedIn = false;
console.log("Not Logged In:", !isLoggedIn);


// ==============================
// 5. Unary Operators
// ==============================

console.log("\n---- Unary Operators ----");

let score = 10;

score++;
console.log("Score after increment:", score);

score--;
console.log("Score after decrement:", score);


// ==============================
// 6. Ternary Operator
// ==============================

console.log("\n---- Ternary Operator ----");

let marks = 40;

let result = marks >= 50 ? "Pass" : "Fail";
console.log("Exam Result:", result);

let amount = 1500;

let discountMessage = amount > 1000 ? "10% discount" : "No discount";
console.log("Shopping Discount:", discountMessage);


// ==============================
// 7. if Statement
// ==============================

console.log("\n---- IF Statement ----");

let temperature = 35;

if (temperature > 30) {
    console.log("It is hot today");
}


// ==============================
// 8. if else Statement
// ==============================

console.log("\n---- IF ELSE ----");

let wallet = 500;

if (wallet >= 1000) {
    console.log("You can buy a phone");
} else {
    console.log("Not enough money");
}


// ==============================
// 9. else if Statement
// ==============================

console.log("\n---- ELSE IF ----");

let studentMarks = 75;

if (studentMarks >= 80) {
    console.log("Grade A");
}
else if (studentMarks >= 60) {
    console.log("Grade B");
}
else if (studentMarks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}


// ==============================
// 10. Switch Statement
// ==============================

console.log("\n---- SWITCH ----");

let role = "admin";

switch(role) {
    case "admin":
        console.log("Full Access");
        break;

    case "editor":
        console.log("Edit Content");
        break;

    case "user":
        console.log("View Only");
        break;

    default:
        console.log("Unknown Role");
}


// ==============================
// Mini Real World Problem
// ==============================

console.log("\n---- Mini Problem: Shop Discount ----");

let purchase = 1500;

if (purchase >= 2000) {
    console.log("20% discount applied");
}
else if (purchase >= 1000) {
    console.log("10% discount applied");
}
else {
    console.log("No discount");
}