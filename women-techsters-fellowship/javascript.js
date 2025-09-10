const amHuman = confirm("Are you human?") // confirm gives you a yes or no reply.
const name = prompt("what is your name?")
console.log(name)

let jobTitle = prompt("what is your job role?")
console.log(jobTitle)


















































const buyer = {
  name: "Mki Hanks",
  balance: 200000,
  balanceCurrency: "USD",
  isAccountBlocked: false,
};

const seller = {
  name: "Emmanuel Daniel",
  balance: 1000000,
  balanceCurrency: "USD",
  isAccountBlocked: false,
};

let item = {
  name: "Apple",
  quantity: 50,
  pricePerItem: 20,
  currency: "USD",
};

const cart = {
    price: 0
}

cart.price = item.pricePerItem * 4 // item.pricePerItem * 4
item.quantity = item.quantity - 4

console.log(cart, item);
buyer.balance = buyer.balance - cart.price;
seller.balance += cart.price

console.log(buyer, 'buyer');
console.log(seller, 'seller');
 


const numberOfItems = 501
const isEnoughItems = item.quantity >= numberOfItems
console.log('isEnoughItems', isEnoughItems)

const isGreaterItems = item.quantity > numberOfItems
console.log('isGreaterItems', isGreaterItems)
const isLessItems = item.quantity < numberOfItems
console.log('isLessItems', isLessItems)

const isExactSize = item.quantity == numberOfItems
console.log('isExactSize', isExactSize);

const isNotExactSize = item.quantity != numberOfItems
console.log('isNotExactSize', isNotExactSize)
 

