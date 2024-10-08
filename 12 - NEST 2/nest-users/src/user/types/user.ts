export type UserLogin = {
  email: string;
  password: string;
};

export interface JwtPayloadUser {
  first_name: string;
  last_name: string;
  role: string;
}

export interface RequestUser extends Request {
  user: JwtPayloadUser;
}
