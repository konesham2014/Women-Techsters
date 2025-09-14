// Define basket1 with a name and property indicating if it has fruit
let basket1 = { 
    name: "basket1", 
    hasfruit: false 
};

// Define basket2 with a name and property indicating if it has fruit
let basket2 = { 
    name: "basket2", 
    hasfruit: true 
};

// Define basket3 with a name and property indicating if it has fruit
let basket3 = { 
    name: "basket3", 
    hasfruit: false 
};

// Check baskets one by one using if ... else if ... else
if (basket1.hasfruit === true) {
    // If basket1 has fruit, print its name and that it has fruit
    console.log(basket1.name + " has fruit");
} else if (basket2.hasfruit === true) {
    // If basket1 was empty but basket2 has fruit, print basket2 result
    console.log(basket2.name + " has fruit");
} else if (basket3.hasfruit === true) {
    // If both basket1 and basket2 were empty but basket3 has fruit
    console.log(basket3.name + " has fruit");
} else {
    // If none of the baskets have fruit, print this message
    console.log("All baskets are empty");
}
