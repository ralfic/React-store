export default function calculateDiscount(discount: number | undefined, price: number | undefined) {
  if (discount && price) {
    return Math.round((price *  discount) / 100);
  }
  return 0;
}
