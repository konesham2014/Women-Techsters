//Declaring 3 variables
let baskets = [
  { name: "basket1", fruits: ["apple", "banana"] },
  { name: "basket2", fruits: [] },
  { name: "basket3", fruits: ["orange", "apple", "apple"] },
];


//Function
function hasFruit(basket) {
  return basket.fruits.length > 0;
}


//Converting string into numbers
function toNumber(str) {
  let trimmed = str.trim();
  let num = Number(trimmed);
  return num;
}


//How many fruits are in a basket
function basketSummary(basket) {
  if (hasFruit(basket)) {
    return basket.name + " has " + basket.fruits.length + " fruit(s).";
  } else {
    return basket.name + " is empty.";
  }
}


//Function
let filterByMinFruits = function(minCount) {
  return baskets.filter(function(basket) {
    return basket.fruits.length >= minCount;
  });
};


// Loop whether it has fruit or is empty
for (let i = 0; i < baskets.length; i++) {
  let b = baskets[i];
  // OR (||) to choose one message or another
  if (hasFruit(b) || b.fruits.length > 0) {
    console.log( basketSummary(b) );  
  } else {
    console.log( basketSummary(b) );
  }
}


// Array
let summaries = baskets.map(function(b) {
  return basketSummary(b);
});
console.log("Summaries:", summaries);

// Filtering with at least one fruit
let nonEmptyBaskets = baskets.filter(function(b) {
  return hasFruit(b);
});
console.log("Non-empty baskets:", nonEmptyBaskets.map(b => b.name));


// Reduce number of basktes
let totalFruits = baskets.reduce(function(accumulator, basket) {
  return accumulator + basket.fruits.length;
}, 0);
console.log("Total fruits across all baskets:", totalFruits);


// Objects
let stats = {
  basket1: baskets[0].fruits.length,
  basket2: baskets[1].fruits.length,
  basket3: baskets[2].fruits.length
};


// Get keys, values, entries
let statKeys = Object.keys(stats);     
let statValues = Object.values(stats);  
let statEntries = Object.entries(stats); 


console.log("Stat keys:", statKeys);
console.log("Stat values:", statValues);
console.log("Stat entries:", statEntries);


// Type conversion
let userInput = "  5  ";
let minCount = toNumber(userInput);  


// Checking if the conversion worked
if (!isNaN(minCount) && minCount >= 0) {
  let filtered = filterByMinFruits(minCount);
  console.log("Baskets with at least " + minCount + " fruit(s):", filtered.map(b => b.name));
} else {
  console.log("Invalid minimum count input:", userInput);
}