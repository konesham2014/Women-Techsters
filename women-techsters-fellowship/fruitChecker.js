// ---------- Setup: define baskets inventory ----------

// Each basket is an object with a name and an array of fruits
let baskets = [
  { name: "basket1", fruits: ["apple", "banana"] },
  { name: "basket2", fruits: [] },
  { name: "basket3", fruits: ["orange", "apple", "apple"] },
];

// ---------- Function Declarations ----------

// Function to check if a basket has any fruit at all
// Takes a basket object, returns true if non‐empty, false if empty
function hasFruit(basket) {
  // .fruits is an array; check length
  return basket.fruits.length > 0;
}

// Function to convert a possibly numeric string to a number, if valid.
// If not valid number, returns NaN. (Demonstrates type conversions)
function toNumber(str) {
  // trim spaces
  let trimmed = str.trim();
  // try converting
  let num = Number(trimmed);
  return num;
}

// Function to get a summary string describing how many fruits are in a basket
function basketSummary(basket) {
  if (hasFruit(basket)) {
    // use length to count fruits
    return basket.name + " has " + basket.fruits.length + " fruit(s).";
  } else {
    return basket.name + " is empty.";
  }
}

// ---------- Function Expression ----------

// We make an expression that filters baskets by a minimum number of fruits.
// Given a number minCount, returns a new array of baskets with at least that many fruits.
let filterByMinFruits = function(minCount) {
  // Using array method filter
  return baskets.filter(function(basket) {
    // holds true if number of fruits >= minCount
    return basket.fruits.length >= minCount;
  });
};

// ---------- Using loops and logical operators ----------

// Loop to report for each basket whether it has fruit or is empty
for (let i = 0; i < baskets.length; i++) {
  let b = baskets[i];
  // Logical operator: OR (||) to choose one message or another
  if (hasFruit(b) || b.fruits.length > 0) {
    console.log( basketSummary(b) );  
  } else {
    console.log( basketSummary(b) );
  }
}

// ---------- Using array‐methods for more advanced tasks ----------

// 1. Map: produce an array of summaries
let summaries = baskets.map(function(b) {
  return basketSummary(b);
});
console.log("Summaries:", summaries);

// 2. Filter: baskets with at least one fruit
let nonEmptyBaskets = baskets.filter(function(b) {
  return hasFruit(b);
});
console.log("Non-empty baskets:", nonEmptyBaskets.map(b => b.name));

// 3. Reduce: total number of fruits across all baskets
let totalFruits = baskets.reduce(function(accumulator, basket) {
  return accumulator + basket.fruits.length;
}, 0);
console.log("Total fruits across all baskets:", totalFruits);

// ---------- Using keys, values, entries on an object ----------

// Suppose we have a stats object counting fruits per basket by name
let stats = {
  basket1: baskets[0].fruits.length,
  basket2: baskets[1].fruits.length,
  basket3: baskets[2].fruits.length
};

// Get keys, values, entries
let statKeys = Object.keys(stats);      // ["basket1", "basket2", "basket3"]
let statValues = Object.values(stats);  // their counts, e.g. [2,0,3]
let statEntries = Object.entries(stats); // pairs [["basket1",2], ["basket2",0], ["basket3",3]]

console.log("Stat keys:", statKeys);
console.log("Stat values:", statValues);
console.log("Stat entries:", statEntries);

// ---------- Example of type conversion + user‐like input simulation ----------

let userInput = "  5  "; // a string with spaces, simulating user entering something
let minCount = toNumber(userInput);  

// Check if conversion worked (not NaN), using logical operators
if (!isNaN(minCount) && minCount >= 0) {
  // using our filterByMinFruits function expression
  let filtered = filterByMinFruits(minCount);
  console.log("Baskets with at least " + minCount + " fruit(s):", filtered.map(b => b.name));
} else {
  console.log("Invalid minimum count input:", userInput);
}