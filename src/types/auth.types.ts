import { User } from './user.types';

export interface AuthState {
  user: User;
  token: string;
  isLoggedIn?: boolean;
  isRefreshing?: boolean;
}
