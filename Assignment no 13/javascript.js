// =====================================
// 1. Grocery Bill Calculator
// =====================================
function calculateBill() {
    let total = 0;

    let items = Number(prompt("Enter number of items:"));

    for (let i = 1; i <= items; i++) {
        let price = Number(prompt("Enter price of item " + i + ":"));
        total += price;
    }

    if (total > 5000) {
        alert("10% Discount Applied!");
        total = total - (total * 0.10);
    }

    return total;
}


// =====================================
// 2. Student Result System
// =====================================
function calculateGrade(avg) {
    if (avg >= 80) {
        return "A";
    } else if (avg >= 60) {
        return "B";
    } else if (avg >= 40) {
        return "C";
    } else {
        return "Fail";
    }
}

function studentResult() {
    let studentName = prompt("Enter student name:");
    let totalMarks = 0;

    for (let i = 1; i <= 5; i++) {
        let marks = Number(prompt("Enter marks for subject " + i + ":"));
        totalMarks += marks;
    }

    let average = totalMarks / 5;
    let grade = calculateGrade(average);

    alert("Student Name: " + studentName);
    alert("Total Marks: " + totalMarks);
    alert("Average: " + average);
    alert("Grade: " + grade);
}


// =====================================
// 3. ATM Withdrawal System
// =====================================
let balance = 10000;

function withdrawMoney(amount) {
    if (amount > balance) {
        alert("Insufficient balance!");
    } else {
        balance -= amount;
        alert("Withdrawal Successful!");
        alert("Remaining Balance: " + balance);
    }
}

function atmSystem() {
    for (let i = 1; i <= 3; i++) {
        let amount = Number(prompt("Attempt " + i + ": Enter amount to withdraw:"));
        withdrawMoney(amount);
    }
}


// =====================================
// RUN ALL PROGRAMS
// =====================================
alert("===== PROGRAM START =====");

// 1. Grocery
let bill = calculateBill();
alert("Final Grocery Bill: " + bill);

// 2. Student Result
studentResult();

// 3. ATM
atmSystem();

alert("===== PROGRAM END =====");