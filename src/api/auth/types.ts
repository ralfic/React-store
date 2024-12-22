export interface AuthResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    remember?: boolean;
  };
}

export interface AuthRequest {
  name?: string;
  email: string;
  password: string;
  remember?: boolean;
}
