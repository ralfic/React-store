import { CiSearch } from 'react-icons/ci';
import { PiUserCircleLight, PiShoppingCartSimpleLight } from 'react-icons/pi';

export default function HeaderFeature() {
  return (
    <div className="flex gap-2">
      <button>
        <CiSearch className="w-6 h-6" />
      </button>
      <button>
        <PiUserCircleLight className="w-6 h-6" />
      </button>
      <button className="flex gap-y-1 items-center justify-center">
        <PiShoppingCartSimpleLight className="w-6 h-6" />
        <span className="bg-black text-white rounded-full font-bold text-xs leading-[10px] w-5 h-5 text-center content-center">
          2
        </span>
      </button>
    </div>
  );
}
