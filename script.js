// =========================
// Part 1: Basics
// =========================
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "✅ You are an adult.";
  } else {
    result.textContent = "❌ You are a minor.";
  }
}

// =========================
// Part 2: Functions
// =========================

// Function 1: Square a number
function squareNumber() {
  let num = document.getElementById("numInput").value;
  let result = document.getElementById("squareResult");
  result.textContent = "Square: " + calculateSquare(num);
}

// Helper reusable function
function calculateSquare(n) {
  return n * n;
}

// Function 2: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}
// Example usage in console: console.log(calculateTotal(5, 3));

// =========================
// Part 3: Loops
// =========================

// Example 1: Countdown using for loop
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear previous list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Loop through an array using forEach
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];
fruits.forEach(fruit => console.log(fruit));

// =========================
// Part 4: DOM Manipulation
// =========================
let toggleBtn = document.getElementById("toggleBtn");
let message = document.getElementById("message");

toggleBtn.addEventListener("click", function () {
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});
