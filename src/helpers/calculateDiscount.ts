export default function calculateDiscount(discount: number, price: number) {
  if (discount && price) {
    return Math.round((price * (100 - discount)) / 100);
  }
  return 0;
}
