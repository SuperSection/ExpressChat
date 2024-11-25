class Env {
  static APP_URL: string = process.env.NEXT_PUBLIC_APP_URL as string;
  static BACKEND_URL: string = process.env.NEXT_PUBLIC_BACKEND_URL as string;

  static GOOGLE_CLIENT_ID: string = process.env
    .NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;
  static GOOGLE_CLIENT_SECRET: string = process.env
    .NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string;
}

export default Env;
