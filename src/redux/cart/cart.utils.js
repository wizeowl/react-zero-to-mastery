export const addItem = (cartItems, newItem) => {
  const index = cartItems.findIndex(({ id }) => id === newItem.id);
  if (index >= 0) {
    return cartItems.map(
      item => item.id === newItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

export const removeItem = (cartItems, removedItem) => {
  return cartItems
    .map(item => {
      if (item.id === removedItem.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter(({ quantity }) => quantity);
};
