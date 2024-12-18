import clsx from 'clsx';
import { PiMinus, PiPlus } from 'react-icons/pi';

interface IProps {
  quantityProduct: number;
  fnIncrease: () => void;
  fnDecrease: () => void;
  type: 'solid' | 'outline';
}

export default function ProductQuantity({
  quantityProduct,
  type = 'solid',
  fnIncrease,
  fnDecrease,
}: IProps) {
  return (
    <div
      className={clsx(
        'py-2 px-4 flex rounded-lg self-start',
        type === 'solid'
          ? 'bg-gray-100 gap-4 '
          : ' bg-transparent border border-black gap-3'
      )}
    >
      <button disabled={quantityProduct === 1} onClick={fnDecrease}>
        <PiMinus className="h-4 w-4" />
      </button>
      <div className="font-semibold text-center content-center">
        {quantityProduct}
      </div>
      <button onClick={fnIncrease}>
        <PiPlus className="h-4 w-4" />
      </button>
    </div>
  );
}
