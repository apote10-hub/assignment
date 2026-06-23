// Task 1
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(number + " is an even number.");
  } else {
    console.log(number + " is an odd number.");
  }
}

// Task 2
function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
  }
}

// Task 3
function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Task 4
function squarePattern(n) {
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= n; col++) {
      line += "*";
    }
    console.log(line);
  }
}

// Task 5
function rightTriangle(n) {
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
      line += "*";
    }
    console.log(line);
  }
}

checkEvenOrOdd(7);
checkEvenOrOdd(8);
multiplicationTable(5);
fizzBuzz();
squarePattern(5);
rightTriangle(5);