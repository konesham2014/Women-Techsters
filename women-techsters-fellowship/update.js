function updateStock(id, newQuantity) {
  if (newQuantity < 0) {
    console.log("Error: Quantity cannot be negative.");
    return;
  }

  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];

    if (product.id === id) {
      product.quantity = newQuantity;
      console.log("Stock updated: " + product.name + " now has " + newQuantity + " items.");
      return;
    }
  }

  console.log("Product with ID " + id + " not found.");
}
