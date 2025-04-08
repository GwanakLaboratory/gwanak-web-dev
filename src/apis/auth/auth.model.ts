export type AuthSignInRequest = {
  email: string;
  password: string;
};
export type AuthSignInResponse = {
  detail: {
    access_token: string;
  };
};

export type AuthSignUpRequest = {
  email: string;
  password: string;
  username: string;
  nickname: string;
  phoneNumber: string;
  sex?: string;
  age?: string;
};
