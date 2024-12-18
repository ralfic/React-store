import { getRndInteger } from './getRndInteger';

const categories = ['tv', 'audio', 'laptop', 'mobile', 'gaming', 'appliances'];

export default function getRandomCategory() {
  return categories[getRndInteger(0, categories.length)];
}
