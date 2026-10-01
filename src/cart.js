// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  if (items.length === 0) return 0;

  let subtotal = 0;
  for (const item of items) {
    if (typeof item.price !== 'number' || !Number.isFinite(item.price)|| item.price < 0)
      throw new RangeError('price must be a non-negative number');
    if (!Number.isInteger(item.qty) || item.qty <= 0)
      throw new RangeError('qty must be a positive integer');
    subtotal += item.price * item.qty;
  }

  let shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;
  let vat = options.vatRate * subtotal;
  let total = subtotal + shipping + vat;

  return Math.round(total);
}
