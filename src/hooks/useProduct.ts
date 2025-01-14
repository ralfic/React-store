import calculateDiscount from '@/helpers/calculateDiscount';
import { useAppDispatch, useAppSelector } from '@/store';
import { addItem, removeItem } from '@/store/slices/cart/cart.slice';
import { toggleCart } from '@/store/slices/flyoutCart.slice';
import {
  removeItemFromWishList,
  addItemToWishList,
} from '@/store/slices/wishlist/wishlist.slice';
import { ICartItem, IProduct } from '@/types';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface IUseProduct {
  discount: number;
  addToWishList: () => void;
  addToCart: () => void;
  thereIsInCar: boolean;
  thereIsInWishlist: boolean;
  removeFromWishList: () => void;
  navigateToProduct: () => void;
  removeFromCart: () => void;
}

export default function useProduct(product: IProduct | ICartItem): IUseProduct {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const itemsWishlist = useAppSelector((state) => state.wishlist.items);
  const items = useAppSelector((state) => state.cart.items);

  const discount = useMemo(
    () => calculateDiscount(product.discount, product.price),
    [product]
  );

  const thereIsInCar = !!items.find((i) => i.id === product.id);
  const thereIsInWishlist = !!itemsWishlist.find((i) => i.id === product.id);

  function addToWishList() {
    if (thereIsInWishlist) {
      dispatch(removeItemFromWishList(product));
    } else {
      toast.success('Added to wishlist');
      dispatch(addItemToWishList(product));
    }
  }

  function addToCart() {
    if (!thereIsInCar) {
      toast.success('Added to cart');
      dispatch(addItem(product));
    } else {
      dispatch(toggleCart(true));
    }
  }

  function removeFromWishList() {
    dispatch(removeItemFromWishList(product));
  }

  function removeFromCart() {
    dispatch(removeItem(product));
  }

  function navigateToProduct() {
    navigate(`/product/${product.id}`);
  }

  return {
    discount,
    addToWishList,
    addToCart,
    thereIsInCar,
    thereIsInWishlist,
    removeFromWishList,
    navigateToProduct,
    removeFromCart,
  };
}
