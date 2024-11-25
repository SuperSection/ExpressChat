// Define a reusable type for User
export type AuthUser = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string | null;
  token?: string | null;
};

export type CustomSession = {
  user?: AuthUser;
  expires: string;
};

declare module "next-auth" {
  interface User extends AuthUser {}
  interface Session extends CustomSession {}
}

declare module "next-auth/jwt" {
  interface JWT {
    user: AuthUser;
  }
}
