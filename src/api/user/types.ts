import { IOrder, IUser } from '@/types';

export interface GetUserRequest {
  token: string | null;
  id: number | null;
}

export interface AddAccountDetailsRequest {
  token: string | null;
  id: number | null;
  userData: Partial<IUser>;
}

export interface ChangeUserPasswordRequest {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface ChangeUserPasswordResponse {
  message: string;
}

export interface CreateOrderRequest {
  token: string;
  order: IOrder;
  userId: number;
}

export interface GetNewOrderRequest {
  token: string | null;
  id: string | null;
}
