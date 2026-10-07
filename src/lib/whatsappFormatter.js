export const formatOrderForWhatsApp = (cartItems) => {
  let message = "🛍️ *New Order Request*\n\n";
  cartItems.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `   Qty: ${item.qty} | Price: $${item.price * item.qty}\n`;
  });
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  message += `\n*Total: $${total}*\n\nPlease confirm my order.`;
  return encodeURIComponent(message);
};