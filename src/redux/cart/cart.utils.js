export const addItem = (cartItems, newItem) => {
  const index = cartItems.findIndex(({ id }) => id === newItem.id);
  if (index >= 0) {
    return cartItems.map(
      item => item.id === newItem.id
        ? { ...item, count: item.count + 1 }
        : item
    );
  } else {
    return [...cartItems, { id: newItem.id, count: 1, item: newItem }];
  }
};
