import { IUser } from '@/types';

export interface AuthResponse {
  token: string;
  user: IUser;
}

export interface AuthRequest {
  name?: string;
  email: string;
  password: string;
  remember?: boolean;
}
