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

export type AuthSignUpViewModel = {
  email: string;
  password: string;
  passwordConfirm: string;
  username: string;
  birthday: string;
  nickname: string;
  phoneNumber: string;
  agreement: boolean;
  sex?: 'M' | 'W';
  age?: '1' | '2' | '3' | '4' | '5';
};

export type AuthKaKaoInfoRequest = {
  full_name: string;
  phone_number: string;
  birthday: string;
};

export type AuthKaKaoInfoResponse = {
  detail: {
    certId: string;
  };
};

export type AuthKaKaoInfoViewModel = {
  fullName: string;
  phoneNumber: string;
  birthday: string;
};

export type AuthKaKaoValidateRequest = {
  certId: string;
};
