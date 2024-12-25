import { IUser } from "@/types";

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
