export interface ChangePasswordRequest {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {
  message: string;
}

export interface AddAccountDetailsRequest {
  lastName: string,
  flirtsName: string
  email: string
  name: string
}
