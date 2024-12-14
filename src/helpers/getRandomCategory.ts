import { categories } from '@/constants/constants';
import { getRndInteger } from './getRndInteger';

export default function getRandomCategory() {
  return categories[getRndInteger(0, categories.length)];
}
