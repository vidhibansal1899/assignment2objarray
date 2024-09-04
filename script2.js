// Item class
class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  }
  
  // Inventory management functions
  let inventory = [];
  
  function addItem(inventory, item) {
    inventory.push(item);
    return inventory;
  }
  
  function updateItem(inventory, id, newDetails) {
    const itemIndex = inventory.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      Object.assign(inventory[itemIndex], newDetails);
    }
    return inventory;
  }
  
  function deleteItem(inventory, id) {
    const itemIndex = inventory.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      inventory.splice(itemIndex, 1);
    }
    return inventory;
  }
  
  function getItem(inventory, id) {
    return inventory.find((item) => item.id === id);
  }
  
  function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
  }
  
  // Main program
  // Add items to the inventory
  inventory = addItem(inventory, new Item(1, "Apple", 10, 1.99));
  inventory = addItem(inventory, new Item(2, "Banana", 20, 0.99));
  inventory = addItem(inventory, new Item(3, "Orange", 30, 2.49));
  
  console.log("Initial Inventory:");
  printInventory(inventory);
  
  // Update an item
  inventory = updateItem(inventory, 2, { quantity: 25, price: 1.29 });
  console.log("After updating Banana:");
  printInventory(inventory);
  
  // Delete an item
  inventory = deleteItem(inventory, 3);
  console.log("After deleting Orange:");
  printInventory(inventory);
  
  // Get an item
  const item = getItem(inventory, 1);
  console.log("Item with id 1:", item);