import {  useAppSelector } from '@/store';
import { PiUserCircleLight} from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { MdOutlineLightMode } from 'react-icons/md';
import useToggleThem from '@/hooks/useToggleThem';
import CartIcon from '../uikit/CartIcon';

export default function HeaderFeature() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { toggleTheme } = useToggleThem();

  return (
    <div className="flex gap-2 ml-auto">
      <button onClick={toggleTheme}>
        <MdOutlineLightMode className="w-6 h-6 hover:dark:fill-violet-500 transition-colors" />
      </button>
      <Link to={isAuthenticated ? '/account' : '/signin'}>
        <PiUserCircleLight className="w-6 h-6 hover:dark:fill-violet-500 transition-colors" />
      </Link>
      <CartIcon/>
    </div>
  );
}
