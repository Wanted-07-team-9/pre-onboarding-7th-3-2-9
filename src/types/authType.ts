export type loginForm = {
  email: string;
  password: string;
};

export type adminUser = {
  accessToken: string;
  user?: {
    email: string;
    id: number;
  };
};
