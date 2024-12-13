import { categories } from '@/constants/constants';

export default function getRandomCategory() {
  const randomNumber = Math.floor(Math.random() * categories.length);
  return categories[randomNumber];
}
