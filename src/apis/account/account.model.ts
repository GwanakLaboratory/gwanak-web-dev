export type PropensityReqeust = {
  score: number;
};

export type UserInfoResponse = {
  detail: {
    email: string;
    full_name: string;
    gender: string;
    nick_name: string;
    phone_num: string;
    propensity: null | number;
  };
};
