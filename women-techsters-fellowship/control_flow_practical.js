//Task 1
let age = prompt("Hello! How old are you?");
age = Number(age);

if (isNaN(age) || age <= 0) {
  alert("Hmm... that doesn't look like a valid age. Please try again!");
} else if (age < 18) {
  alert("You are too young to vote. But don’t worry — your time will come soon!");
} else if (age >= 18 && age <= 64) {
  alert("Awesome! You are eligible to vote. Make your voice count!");
} else {
  alert("You are a senior citizen voter — your experience matters, keep voting!");
}



//Task 2
let sum = 0;
let evenNumbers = "";

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    evenNumbers += i + " ";
    sum += i;
  }
}

alert("Even numbers between 1 and 20 are:\n" + evenNumbers);
alert("The total sum of these even numbers is: " + sum);



//Task 3
let count = 1;
let numbers = "";

while (count <= 10) {
  numbers += count + " ";
  count++;
}

alert("Counting from 1 to 10:\n" + numbers);
alert("Done counting! We reached 10.");



//Task 4
let dayNumber = prompt("Please enter a number from 1 to 7 to find out the day of the week:");
dayNumber = Number(dayNumber);

let dayName;

switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day number!";
}

alert("You entered: " + dayNumber + "\nThat means it's: " + dayName);
