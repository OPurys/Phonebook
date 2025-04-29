export interface User {
  name: string;
  email: string;
}

export interface UserCredentials extends User {
  password: string;
}
